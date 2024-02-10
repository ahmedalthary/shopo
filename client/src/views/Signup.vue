<template>
    <section class="my-20">
        <div class="flex gap-32 flex-row ">
            <div class="w-[600px] rounded-b-3 overflow-hidden">
                <img src="../assets//img/signup.svg" class="h-full object-cover" alt="Signup">
            </div>
            <div class="me-[135px] flex-grow-[1]">
                <h1 class="h-medium-36 text-text-color2 mb-4">Create an account</h1>
                <p class="t-medium-16 text-text-color2">Enter your details below</p>
                <form class="my-8 flex flex-col gap-10 ">
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
                    class="mb-3 bg-button-color2 t-medium-16 text-text-color rounded-b-3 p-3 w-full">Create
                    Account</button>
                <!-- This is temp button until i use google login services -->
                <button
                    class="bg-transparent t-medium-16 text-text-color2 rounded-b-3 p-3 w-full border border-text-color1">Sign
                    up with
                    Google</button>
                <p class="t-medium-16 text-text-color1  mt-8 ">Already have account? <span
                        class="ms-4 pb-[2px] t-medium-16 text-text-color2 border-b-2 border-text-color1 cursor-pointer hover:text-secondary2">Log
                        in</span>
                </p>
            </div>
        </div>

    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>