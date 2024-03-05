<template>
    <section class="my-20">
        <div class="flex gap-24 flex-row ">
            <div class=" rounded-b-3 flex-grow-[1] overflow-hidden">
                <img src="../assets//img/signup.svg" class="h-full object-cover" alt="Signup">
            </div>
            <div class="me-[135px] w-[400px] self-center">
                <h1 class="h-medium-36 text-text-color2 mb-3">Create an account</h1>
                <p class="t-medium-16 text-text-color2">Enter your details below</p>
                <form class="my-6 flex flex-col gap-10 ">
                    <input type="text"
                        class=" py-[7px]  placeholder:text-[16px] placeholder:font-normal text-[16px] text-text-color1 font-medium focus:outline-0  border-b focus:border-secondary2 "
                        placeholder="Name">
                    <input type="email"
                        class=" py-[7px]  placeholder:text-[16px] placeholder:font-normal text-[16px] text-text-color1 font-medium focus:outline-0  border-b focus:border-secondary2 "
                        placeholder="Email">
                    <input type="tel"
                        class=" py-[7px]  placeholder:text-[16px] placeholder:font-normal text-[16px] text-text-color1 font-medium focus:outline-0  border-b focus:border-secondary2 "
                        placeholder="Phone Number">
                    <input type="password"
                        class=" py-[7px]  placeholder:text-[16px] placeholder:font-normal text-[16px] text-text-color1 font-medium focus:outline-0  border-b focus:border-secondary2 "
                        placeholder="Password">
                </form>
                <button type="submit"
                    class="bg-button-color2 t-medium-16 text-text-color rounded-b-3 p-3 w-full transition-colors duration-300 hover:bg-hover-button-color">Create
                    Account</button>
                <div
                    class="text-center my-3 relative  before:content-[''] before:w-full before:h-[1px] before:bg-gray-400 before:absolute before:left-0 before:top-1/2">
                    <span class="t-medium-14 text-gray-500 bg-primary relative px-4">Or</span>
                </div>
                <!-- This is temp button until i use google login services -->
                <button
                    class="bg-transparent t-medium-16 text-text-color2 rounded-b-3 p-3 w-full border border-text-color1">Sign
                    up with
                    Google</button>
                <div class="mt-6 flex gap-4">
                    <p class="t-medium-16 text-text-color1">Already have an account?</p>
                    <RouterLink :to="{ name: 'Login' }"
                        class="pb-[2px] t-medium-16 text-text-color2 border-b-2 border-text-color1 cursor-pointer  transition-colors duration-300 hover:text-secondary2 hover:border-secondary2">
                        Log in
                    </RouterLink>
                    <div class=""> </div>
                </div>
            </div>

        </div>

    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>