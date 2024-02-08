<template>
    <header>
        <div :class="{ 'sticky': headerSticky }" class="scrolling-header w-full z-[999] p-5 left-0 bg-primary md:fixed ">
            <div class="container">
                <div class="navBar flex items-center flex-wrap">
                    <div class="navBar-logo md:flex-grow-[2] flex-shrink-0">
                        <RouterLink class="text-text-color2 h-bold-24 " :to="{ name: 'Home' }">
                            <i class="uil uil-restaurant"></i>
                            <span class="ml-2">Shopo</span>
                        </RouterLink>
                    </div>
                    <div :class="{ 'collapsed': collapsed }"
                        class="navBar-collapsing mt-6 md:mt-0 order-4 w-full h-[300px] opacity-100 transition-all duration-300 md:flex-grow-[3]  md:order-[initial] md:w-[initial] md:h-[initial] ">
                        <ul class="navBar-navLink flex flex-col w-full gap-primary-gap md:flex-row md:justify-center">

                            <li
                                class="active t-regular-16 cursor-pointer transition-colors duration-300 p-[5px] relative text-text-color2 hover:text-secondary2 md:p-[10px] md:before:content-[''] md:before:absolute md:before:left-[10px] md:before:bottom-0 md:before:h-[2px] md:before:w-0 md:before:z-[-1] md:before:bg-text-color2 md:before:transition md:before:rounded-[3px]">
                                Home</li>
                            <li
                                class=" t-regular-16 cursor-pointer transition-colors duration-300 p-[5px] relative text-text-color2 hover:text-secondary2  md:p-[10px] md:before:content-[''] md:before:absolute md:before:left-[10px] md:before:bottom-0 md:before:h-[2px] md:before:w-0 md:before:z-[-1] md:before:bg-text-color2 md:before:transition md:before:rounded-[3px]">
                                Contact</li>
                            <li
                                class=" t-regular-16 cursor-pointer transition-colors duration-300 p-[5px] relative text-text-color2 hover:text-secondary2  md:p-[10px] md:before:content-[''] md:before:absolute md:before:left-[10px] md:before:bottom-0 md:before:h-[2px] md:before:w-0 md:before:z-[-1] md:before:bg-text-color2 md:before:transition md:before:rounded-[3px]">
                                About</li>
                            <li
                                class=" t-regular-16 cursor-pointer transition-colors duration-300 p-[5px] relative text-text-color2 hover:text-secondary2  md:p-[10px] md:before:content-[''] md:before:absolute md:before:left-[10px] md:before:bottom-0 md:before:h-[2px] md:before:w-0 md:before:z-[-1] md:before:bg-text-color2 md:before:transition md:before:rounded-[3px]">

                                <RouterLink :to="{ name: 'Signup' }">
                                    Sign Up
                                </RouterLink>
                            </li>

                        </ul>
                    </div>
                    <div @click="toggleNavBar"
                        class=" toggle-button t-medium-20 text-text-color2 cursor-pointer md:hidden ">
                        <i class="uil uil-bars"></i>
                    </div>
                    <div class="flex gap-primary-gap flex-row md:flex-grow-[2] ">
                        <div class="relative flex-grow-[1]">
                            <input type="text"
                                class=" w-full h-full py-[7px] ps-5 pe-3 bg-secondary placeholder:text-[12px] placeholder:font-semibold text-[12px] text-text-color1 font-medium focus:outline-0 rounded-b-5 border border-transparent focus:border-secondary2 "
                                placeholder="What are you looking for?">
                            <i class="uil uil-search text-[18px] absolute right-[18px] top-2/4 translate-y-[-50%]"></i>
                        </div>
                        <i
                            class="uil uil-heart text-[27px] cursor-pointer transition-colors duration-300 hover:text-secondary2"></i>
                        <i
                            class="uil uil-shopping-cart text-[27px] cursor-pointer transition-colors duration-300 hover:text-secondary2"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { onBeforeUpdate, onMounted, ref } from 'vue';
const headerSticky = ref(false);
const collapsed = ref(true);
onMounted(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            headerSticky.value = true;
        } else {
            headerSticky.value = false
        }
    })



})
// onBeforeUpdate(() => {
//     //  ================ Navbar Item Active ================

//     let NavbarItems = document.querySelectorAll(".navBar-navLink li");
//     let homeSection = document.getElementById("home");
//     let productSection = document.getElementById("product");
//     let contactSection = document.getElementById("contact");
//     function resetActiveClass(navbarItemIndex) {
//         NavbarItems.forEach((NavbarItem) => {
//             NavbarItem.classList.remove("active");
//         });
//         NavbarItems[navbarItemIndex].classList.add("active");
//     }
//     function navbarActiveOnScroll() {
//         if (
//             scrollY >= homeSection.offsetTop &&
//             scrollY < productSection.offsetTop - 100
//         ) {
//             resetActiveClass(0);
//         } else if (
//             scrollY >= productSection.offsetTop - 100 &&
//             scrollY < contactSection.offsetTop - 100
//         ) {
//             resetActiveClass(1);
//         }
//         else {
//             resetActiveClass(2);
//         }
//     }
//     window.addEventListener("scroll", navbarActiveOnScroll);
// })
const toggleNavBar = () => {
    collapsed.value = !collapsed.value

}



</script>


<style scoped>
.scrolling-header.sticky {
    background-color: #fff;
    position: fixed;
    top: -92px !important;
    box-shadow: 2px 2px 5px #303030;
    transform: translateY(92px);
    transition: 0.3s;

}

@media(max-width: 768.98px) {
    .navBar .navBar-collapsing.collapsed {
        height: 0;
        opacity: 0;
        overflow: hidden;
    }

}

@media(min-width: 768px) {
    .navBar-navLink li.active::before {
        width: calc(100% - 20px);
    }
}

.navBar-navLink li.active {
    color: #DB4444;
}
</style>