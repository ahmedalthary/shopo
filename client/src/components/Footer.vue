<template>
    <footer class="bg-black">
        <div class="px-20 py-[135px] ">
            <div class="Container">
                <div class="flex gap-primary-gap flex-col md:flex-row">
                    <div class="flex-1 flex flex-col gap-6 text-text-color ">
                        <h2 class="h-bold-24">Shopo</h2>
                        <h3 class="t-medium-20">Subscribe</h3>
                        <p class="t-regular-16">Get 10% off your first order</p>
                        <div class="relative h-10">
                            <input type="text"
                                class=" w-full h-full py-[7px] ps-5 pe-[2.3rem] bg-transparent placeholder:text-[12px] placeholder:font-semibold text-[12px] text-text-color font-medium focus:outline-0 rounded-b-3 border border-text-color "
                                placeholder="Enter your email">
                            <i class="uil uil-message text-[18px] absolute right-[18px] top-2/4 translate-y-[-50%]"></i>
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col gap-6 text-text-color">
                        <h3 class="t-medium-20">Support</h3>
                        <ul class="flex flex-col gap-4">
                            <li class="t-regular-16">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                            <li class="t-regular-16">exclusive@gmail.com</li>
                            <li class="t-regular-16">+88015-88888-9999</li>
                        </ul>
                    </div>

                    <div class="flex-1 flex flex-col gap-6 text-text-color">
                        <h3 class="t-medium-20">Account</h3>

                        <ul class="flex flex-col gap-4">
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    My Account
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    Login / Register
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    Cart
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    Wish List
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    Shop
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1 flex flex-col gap-6 text-text-color">
                        <h3 class="t-medium-20">Quick Link</h3>
                        <ul class="flex flex-col gap-4">
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    Privacy Policy
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    Terms Of Use
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    FAQ
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="t-regular-16 transition-colors duration-300 hover:text-gray-300">
                                    Contact
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1 flex flex-col gap-6 text-text-color">
                        <h3 class="t-medium-20">Download App</h3>
                        <div>
                            <p class="t-medium-12 text-gray-300 mb-2">Save $3 with App New User Only</p>
                            <!-- This is temp img until i create mobile app for this site -->
                            <img src="../assets/img/Google_Play_App.svg" alt="Site App">
                        </div>

                        <ul class="flex gap-6">
                            <li>
                                <a href="https://www.facebook.com/ahmed.althary.564"
                                    class="cursor-pointer text-[19px] transition-colors duration-300 hover:text-gray-300"
                                    target="_blank">
                                    <i class="uil uil-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://ahmed-althary.vercel.app/"
                                    class="cursor-pointer text-[19px] transition-colors duration-300 hover:text-gray-300"
                                    target="_blank">
                                    <i class="uil uil-link"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/967772100544"
                                    class="cursor-pointer text-[19px] transition-colors duration-300 hover:text-gray-300"
                                    target="_blank">
                                    <i class="uil uil-whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ahmed-althary-020355183/"
                                    class="cursor-pointer text-[19px] transition-colors duration-300 hover:text-gray-300"
                                    target="_blank">
                                    <i class="uil uil-linkedin-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>

        <div class="t-regular-16 text-gray-300 py-5 text-center border-t border-[#ffffff17]">
            Copyright &copy; <span class="year">{{ new Date().getFullYear() }}</span> coded by <span class="name">Ahmed
                AL-Thari</span> . All rights
            reserved.
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped></style>