<script setup>
    import {siteSettingsQuery} from '../graphql/queries';

    const {data} = await useAsyncQuery(siteSettingsQuery);
    const logo = data.value.siteSetting.data.attributes.logo.data.attributes

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: 'Posts' },
        { name: 'Contact', href: '#contact' },
    ]

    const socialIcons = [
        {name: 'Facebook', href: 'www.facebook.com', icon: 'fa-facebook'},
        {name: 'Instagram', href: 'www.instagram.com', icon: 'fa-instagram'}
    ]
</script>

<template>
    <div class="container grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-core-brand-beta pt-8">
        <p class="col-span-1">Hi, I’m Debbie! I am a proud mum of two girls and live in Andover, Hampshire. I completed my Yoga Alliance Professional accredited RYT 200hrs teacher training with Jill Jones Yoga. Doing yoga and meditation keeps me calm and helps me cope with daily family life.</p>
        <img :src="`http://localhost:1337${logo.url}`" :alt="logo.alternativeText" loading="lazy" class="justify-self-center" />
        <div class="col-span-1 justify-self-center lg:justify-self-end space-y-2">
            <nav class="font-medium space-y-2 text-center lg:text-left">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block text-base font-semibold leading-7 hover:text-core-brand-alpha">{{ item.name }}</a>  
            </nav>
            <div class="flex gap-3">
                <a v-for="item in socialIcons" :key="item.name" :href="item.href" class="hover:text-core-brand-alpha"><v-icon :name="item.icon" class="w-10 h-10" /></a>
            </div>
        </div>
    </div>
</template>
