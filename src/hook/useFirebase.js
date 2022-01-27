import { useEffect, useState } from "react"
import initializeFirebase from "../firebase/firebase.init"
import { getAuth, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [err, setErr] = useState('')
    const [isAdmin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    const auth = getAuth()
    // create with email and password account...........
    const createWithEmailAuth = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                setErr("")
                saveUser(name, email)
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    swal("Good job!", "Congratulations you are successfully sign up!", "success")
                    setTimeout(function () {
                        navigate('/')
                    }, 1000)
                })
            }).catch((error) => {
                setErr(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    // login with email and password.................. 
    const loginWithEmail = (email, password, location) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                swal("Good job!", "Congratulations you are successfully sign in!", "success")
                setTimeout(function () {
                    const destination = location?.state?.from || "/"
                    navigate(destination)
                }, 1000)

                const user = result.user
                setErr('')
                setUser(user)
            }).catch((error) => {
                setErr(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    // logout......................
    const logOut = () => {
        swal({
            title: "Are you sure?",
            text: "You went to log Out!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your are successfully log Out!", {
                        icon: "success",
                    });

                    signOut(auth)
                        .then(() => {
                            setErr("")
                            navigate('/')
                        })
                        .catch((error) => {
                            setErr(error.message)
                        })
                        .finally(() => setIsLoading(false))

                } else {
                    swal("Welcome to again!");

                }
            })



    }


    // user observation.............
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [auth])

    // Display error
    if (err) {
        swal("An error Occurred!", err, "error")
    }

    // admin validation......................
    useEffect(() => {
        fetch(`https://enigmatic-shelf-41985.herokuapp.com/isadmin/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('https://enigmatic-shelf-41985.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return {
        createWithEmailAuth,
        loginWithEmail,
        logOut,
        user,
        isLoading,
        isAdmin
    }


}
export default useFirebase;