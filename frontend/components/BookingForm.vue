<template>
    <div class="container mb-10 lg:mb-20">
        <h2 class="m-10 text-center">{{ heading }}</h2>
        <div>
            <div class="w-full md:w-2/3 lg:w-1/2 flex justify-between items-center bg-core-brand-beta hover:bg-core-brand-charlie ease-in duration-150 p-6 rounded-md">   
                <div>
                    <h3>{{ booking.class.data.attributes.title }} <span v-if="!available">- fully booked</span></h3>
                    <p class="mb-2 italic">{{ booking.class.data.attributes.description }}</p>
                    <p>{{ booking.location }}</p>
                </div>    
                <div>
                    <p class="whitespace-nowrap">{{ fullDate }} </p>
                    <p class="mb-2">{{ shortTime}}</p> 
                    <p>{{ booking.price }}</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
    import {bookingQuery} from '../graphql/queries';

    const props = defineProps(['heading'])
    const {data} = await useAsyncQuery(bookingQuery);
    const booking = data.value?.booking?.data?.attributes?.booking[0]

    const event = new Date(booking.timeDate)
    const fullDate = new Intl.DateTimeFormat('en', {dateStyle: 'full'}).format(event)
    const shortTime = new Intl.DateTimeFormat('en', {timeStyle: 'short'}).format(event)

    const available = computed(() => {
        return booking.availability > 0
    })
</script>
