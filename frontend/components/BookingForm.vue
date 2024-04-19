<template>
    <div class="container mb-10 lg:mb-20">
        <h2>{{ heading }}</h2>
        <pre>{{ booking }}</pre>
        <div>
            <a href="/" >
                <div class="w-full md:w-2/3 lg:w-1/2 flex justify-between items-center bg-core-brand-beta hover:bg-core-brand-charlie ease-in duration-150 p-6 rounded-md">   
                    <div>
                        <h3>{{ booking.class.data.attributes.title }}</h3>
                        <p class="mb-2">{{ booking.class.data.attributes.description }}</p>
                        <p>Date: {{ fullDate }} </p>
                        <p>Time: {{ shortTime}}</p> 
                    </div>    
                    <div>
                        <p>{{ booking.price }}</p>
                    </div>
                    
                </div>
            </a> 
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
</script>
