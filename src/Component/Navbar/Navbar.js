import React, { useEffect, useState } from "react";
import { useNavigate, useLocation as useReactLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = ({updateBalance,updateAddress}) => {
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const reactLocation = useReactLocation();

    console.log("user logged",user)
    useEffect(() => {
        console.log("isAuthenticated", isAuthenticated);
        if(isAuthenticated){
            navigate("/dashboard");
        }
        console.log("user", user);
    }, [isAuthenticated, user]);

    useEffect(() => {
        if (reactLocation.pathname === "/dashboard" && !isAuthenticated) {
            navigate("/");
        }
    }, [reactLocation, isAuthenticated, navigate]);

    let userEmail = '';
    if (isAuthenticated) {
        if (user) {
            userEmail = user.email || '';
        }
    }
    useEffect(() => {
        if (isAuthenticated) {
            fetch('http://127.0.0.1:6500/api/v0/getBalance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail, chainId: "296" })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return response.json(); // Parsing the response as JSON
                })
                .then(data => {
                    if (data && data.data && data.data.Data && data.data.Data.balance !== undefined) {
                        updateAddress(data.data.Data.address); // Make sure this function is called correctly
                        updateBalance(data.data.Data.balance);
                    } else {
                        throw new Error('Invalid data format.');
                    }
                })
                .catch(error => {
                    console.error("Error: ", error);
                });
        }
    }, [isAuthenticated, userEmail]);


   
    const onLogin = async () => {
        try {
            await loginWithRedirect({
                screen_hint: "login",
                scope: "openid email profile",
            });
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    const loginUser = async (email) => {
        try {
            const url = 'http://127.0.0.1:6500/api/v0/login'; // replace with the actual login API URL
            const data = { email };

            const loginResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!loginResponse.ok) {
                // If login fails, call the registerUser function
                await registerUser(email);
            } else {
                // If login is successful, perform necessary actions
                console.log('User logged in successfully!');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

  

    const registerUser = async (email) => {
        try {
            const url = 'http://127.0.0.1:6500/api/v0/registration';
            const data = { email };

            const registrationResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!registrationResponse.ok) {
                throw new Error('Failed to register user. Status: ' + registrationResponse.status);
            }
            console.log('User registered successfully!');

            // Call fetchData or any other necessary functions here
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    // Inside the component:

    useEffect(() => {
        if (user && user.email) {
            loginUser(user.email);
        }
    }, [user]);

    // ... (remaining code remains unchanged)







    console.log("UserEmail", userEmail)
    return (
        <div>
            <nav className="bg-transparent">
                <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
                    <img
                        src="https://krypcore.com/static/media/logo.ee8e995963f803c29a62da7258f9af25.svg"
                        className="h-8 mr-3"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    <button
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-6 border border-gray-100 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 items-center">
                            {isAuthenticated ? (
                                <div className="flex"> 
                                    <li>
                                        <div class="flex items-center mr-8">
                                            <div class="block">
                                                <span title="dsonkusare13@gmail.com" class="cursor-pointer text-xl bg-gray-400 rounded-full h-8 w-8 flex items-center justify-center">
                                                    <svg viewBox="64 64 896 896" fill="currentColor" class="w-4 h-4">
                                                        <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="grid">
                                                <div class="text-sm text-gray-400 pl-4">
                                                    <a href="mailto:dsonkusare13@gmail.com" class="text-gray-400 no-underline transition duration-300 ease-in-out">{user.email}</a>
                                                </div>
                                                <div class="text-sm text-gray-400 pl-4"></div>
                                            </div>
                                        </div>

                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="text-white mt-3 md:mt-1 mr-4 text-base md:mb-2 sm:mb-2 sm:mt-1"
                                            onClick={() => logout({ returnTo: window.location.origin })}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </div>
                                
                            ) : (
                                <li className="flex flex-col gap-3 sm:flex-row ">
                                    <button
                                        type="button"
                                        className="text-white mt-3 md:mt-1 mr-4 text-base md:mb-2 sm:mb-2 sm:mt-1"
                                        onClick={onLogin}
                                    >
                                        Login
                                    </button>
                                        <button type="button" className="button" onClick={onLogin}>
                                        Get Started
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
