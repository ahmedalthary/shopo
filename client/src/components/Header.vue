<template>
    <header>
        <div :class="{ 'sticky': headerSticky }" class="scrolling-header w-full z-[999]  left-0 bg-primary">
            <div class="container">
                <div class="navBar p-5 flex items-center flex-wrap">
                    <div class="navBar-logo md:flex-grow-[2] flex-shrink-0">
                        <RouterLink class="text-text-color2 h-bold-24 " :to="{ name: 'Home' }">
                            <i class="uil uil-restaurant"></i>
                            <span class="ml-2">Shopo</span>
                        </RouterLink>
                    </div>
                    <div :class="{ 'collapsed': collapsed }"
                        class="navBar-collapsing mt-6 md:mt-0 order-4 w-full h-[300px] opacity-100 transition-all duration-300 md:flex-grow-[3]  md:order-[initial] md:w-[initial] md:h-[initial] ">
                        <ul
                            class="navBar-navLink navBar-navItem flex flex-col w-full gap-primary-gap md:flex-row md:justify-center">

                            <li :class="{ active: activeNavItemIndex === 0 }"
                                class="t-medium-16 p-[5px] relative text-text-color2  md:p-[10px] md:before:content-[''] md:before:absolute md:before:left-[10px] md:before:bottom-0 md:before:h-[2px] md:before:w-0 md:before:bg-text-color2 md:before:transition md:before:rounded-[3px] md:before:z-[1]">

                                <RouterLink :to="{ name: 'Home' }"
                                    class="cursor-pointer transition-colors duration-300 hover:text-secondary2"
                                    @click="activeNavItem(0)">
                                    Home
                                </RouterLink>
                            </li>
                            <li :class="{ active: activeNavItemIndex === 1 }"
                                class="t-medium-16 p-[5px] relative text-text-color2  md:p-[10px] md:before:content-[''] md:before:absolute md:before:left-[10px] md:before:bottom-0 md:before:h-[2px] md:before:w-0 md:before:bg-text-color2 md:before:transition md:before:rounded-[3px] md:before:z-[1]">

                                <RouterLink :to="{ name: 'Signup' }"
                                    class="cursor-pointer transition-colors duration-300 hover:text-secondary2"
                                    @click="activeNavItem(1)">
                                    Contact
                                </RouterLink>
                            </li>
                            <li :class="{ active: activeNavItemIndex === 2 }"
                                class="t-medium-16 p-[5px] relative text-text-color2  md:p-[10px] md:before:content-[''] md:before:absolute md:before:left-[10px] md:before:bottom-0 md:before:h-[2px] md:before:w-0 md:before:bg-text-color2 md:before:transition md:before:rounded-[3px] md:before:z-[1]">

                                <RouterLink :to="{ name: 'Signup' }"
                                    class="cursor-pointer transition-colors duration-300 hover:text-secondary2"
                                    @click="activeNavItem(2)">
                                    About
                                </RouterLink>
                            </li>
                            <li :class="{ active: activeNavItemIndex === 3 }"
                                class="t-medium-16 p-[5px] relative text-text-color2  md:p-[10px] md:before:content-[''] md:before:absolute md:before:left-[10px] md:before:bottom-0 md:before:h-[2px] md:before:w-0 md:before:bg-text-color2 md:before:transition md:before:rounded-[3px] md:before:z-[1]">
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="cursor-pointer transition-colors duration-300 hover:text-secondary2"
                                    @click="activeNavItem(3)">
                                    Sign Up
                                </RouterLink>
                            </li>

                        </ul>
                    </div>
                    <div @click="toggleNavBar"
                        class=" toggle-button t-medium-20 text-text-color2 cursor-pointer md:hidden ">
                        <i class="uil uil-bars"></i>
                    </div>
                    <div class=" flex gap-primary-gap flex-row md:flex-grow-[2] ">
                        <div class="relative flex-grow-[1]">
                            <input type="text"
                                class=" w-full h-full py-[7px] ps-5 pe-[2.3rem] bg-secondary placeholder:text-[12px] placeholder:font-semibold text-[12px] text-text-color1 font-medium focus:outline-0 rounded-b-3 border border-transparent focus:border-secondary2 "
                                placeholder="What are you looking for?">
                            <i class="uil uil-search text-[18px] absolute right-[18px] top-2/4 translate-y-[-50%]"></i>
                        </div>
                        <ul class=" navBar-navIcon navBar-navItem  flex gap-primary-gap flex-row">
                            <li :class="{ active: activeNavItemIndex === 4 }"
                                class="text-[27px] text-text-color2 relative z-[1] before:content-[''] before:absolute before:left-2/4 before:translate-x-[-48%] top-0 before:h-[40px] before:w-[40px] before:bg-secondary2 before:rounded-[50%] before:z-[-1] before:hidden">
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="cursor-pointer transition-colors duration-300 hover:text-secondary2"
                                    @click="activeNavItem(4)">
                                    <i class="uil uil-heart "></i>
                                </RouterLink>
                            </li>
                            <li :class="{ active: activeNavItemIndex === 5 }"
                                class="text-[27px] text-text-color2 relative z-[1] before:content-[''] before:absolute before:left-2/4 before:translate-x-[-48%] top-0 before:h-[40px] before:w-[40px] before:bg-secondary2 before:rounded-[50%] before:z-[-1] before:hidden">
                                <RouterLink :to="{ name: 'Signup' }"
                                    class="cursor-pointer transition-colors duration-300 hover:text-secondary2"
                                    @click="activeNavItem(5)">
                                    <i class="uil uil-shopping-cart"></i>
                                </RouterLink>
                            </li>
                            <li @click="toggleAccount" :class="{ active: activeNavItemIndex === 6 }"
                                class="text-[27px] text-text-color2 relative z-[1] before:content-[''] before:absolute before:left-2/4 before:translate-x-[-48%] top-0 before:h-[40px] before:w-[40px] before:bg-secondary2 before:rounded-[50%] before:z-[-1] before:hidden">
                                <div class="inline cursor-pointer transition-colors duration-300 hover:text-secondary2">
                                    <i class="uil uil-user"></i>
                                </div>

                                <div :class="{ 'collapsed': collapsedAccount }"
                                    class="absolute right-0 mt-1 rounded-b-3 py-4 ps-5 pe-3 w-56 transition-all duration-500 opacity-100 h-[280px] bg-black bg-opacity-40 backdrop-blur-[6px]">
                                    <ul class="flex flex-col gap-4">
                                        <li class="text-text-color">
                                            <RouterLink :to="{ name: 'Signup' }"
                                                class="cursor-pointer transition-colors duration-300 hover:text-gray-300 flex flex-row items-center gap-1"
                                                @click="activeNavItem(6)">
                                                <i class="uil uil-user text-[24px]"></i>
                                                <span class="t-medium-16">Manage My Account</span>
                                            </RouterLink>
                                        </li>
                                        <li class="text-text-color">
                                            <RouterLink :to="{ name: 'Signup' }"
                                                class="cursor-pointer transition-colors duration-300 hover:text-gray-300 flex flex-row items-center gap-1"
                                                @click="activeNavItem(6)">
                                                <i class="uil uil-shopping-bag text-[24px]"></i>
                                                <span class="t-medium-16">My Order </span>
                                            </RouterLink>
                                        </li>
                                        <li class="text-text-color">
                                            <RouterLink :to="{ name: 'Signup' }"
                                                class="cursor-pointer transition-colors duration-300 hover:text-gray-300 flex flex-row items-center gap-1"
                                                @click="activeNavItem(6)">
                                                <i class="uil uil-times-circle text-[24px]"></i>
                                                <span class="t-medium-16">My Cancellations</span>
                                            </RouterLink>
                                        </li>
                                        <li class="text-text-color">
                                            <RouterLink :to="{ name: 'Signup' }"
                                                class="cursor-pointer transition-colors duration-300 hover:text-gray-300 flex flex-row items-center gap-1"
                                                @click="activeNavItem(6)">
                                                <i class="uil uil-favorite text-[24px]"></i>
                                                <span class="t-medium-16">My Reviews</span>
                                            </RouterLink>
                                        </li>
                                        <li class="text-text-color">
                                            <RouterLink :to="{ name: 'Signup' }"
                                                class="cursor-pointer transition-colors duration-300 hover:text-gray-300 flex flex-row items-center gap-1"
                                                @click="activeNavItem(6)">
                                                <i class="uil uil-signout text-[24px]"></i>
                                                <span class="t-medium-16">Logout</span>
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
const headerSticky = ref(false);
const collapsed = ref(true);
const collapsedAccount = ref(true);
const activeNavItemIndex = ref(0);
onMounted(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            headerSticky.value = true;
        } else {
            headerSticky.value = false
        }
    })

})

const activeNavItem = (index) => {
    activeNavItemIndex.value = index;
    localStorage.setItem('activeNavItemIndex', index);
}



onBeforeMount(() => {
    const storedIndex = localStorage.getItem('activeNavItemIndex');
    if (storedIndex !== null) {
        activeNavItemIndex.value = parseInt(storedIndex);
    }
});

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
const toggleAccount = () => {
    collapsedAccount.value = !collapsedAccount.value

}


</script>


<style>
.scrolling-header.sticky {
    background-color: #fff;
    position: fixed;
    top: -92px !important;
    box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
    transform: translateY(92px);
    transition: 0.3s;

}

.navBar-navIcon li.active,
.navBar-navIcon li.active a:hover,
.navBar-navIcon li.active div:hover {
    color: #fff;
}


.navBar-navIcon li.active::before {
    display: block;
}

.navBar-navIcon li:last-child div {
    height: 280px;
    opacity: 1;
}

.navBar-navIcon li:last-child div.collapsed {
    height: 0;
    opacity: 0;
    overflow: hidden;
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