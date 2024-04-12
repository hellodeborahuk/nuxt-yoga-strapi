<template>
    <div class="bg-stone-50">
        <header class="flex justify-between lg:grid lg:grid-cols-3 items-center py-6 container">
            <h1 class="col-span-1 justify-self-start">Debbie Dann Yoga</h1>
            <nav class="col-span-1 font-medium justify-self-center">
                <div class="hidden lg:flex gap-3">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-semibold leading-7 hover:text-teal-600">{{ item.name }}</a>  
                </div>
            </nav>
            <div class="col-span-1 justify-self-end self-start">            
                <a href="#" class="button-primary hidden lg:flex">Book your class</a>
                <div class="flex items-start lg:hidden">
                    <button type="button" class=" rounded-md p-2.5" @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50"></div>
                <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="flex flex-col gap-4 mb-6">
                        <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-semibold leading-7 hover:bg-teal-50">{{ item.name }}</a>
                    </div>
                    <div class="">           
                        <a href="#" class="button-primary">Book your class</a>
                    </div>
                </div>
                </DialogPanel>
            </Dialog>
        </header>
    </div>
</template>


<script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '#' },
    { name: 'Poems', href: 'Poems' },
    { name: 'Contact', href: '#' },
  ]
  
  const mobileMenuOpen = ref(false)
</script>