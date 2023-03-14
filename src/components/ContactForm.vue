
<template>  
<!-- <form>
    <div class="input-wrapper">
        <label for="email">E-Mail</label>
        <input required v-model="form.email" type="email" name="email">
    </div>
    <div class="input-wrapper">
        <label for="name">Name</label>
        <input required v-model="form.name" type="text" name="name">
    </div>
    <div class="input-wrapper">
        <label for="subject">Betreff</label>
        <input required v-model="form.subject" type="text" name="subject">
    </div>
    <div class="input-wrapper">
        <label for="subject">Nachricht</label>
        <textarea rows="4" required v-model="form.subject" type="text" name="message">
        </textarea>
    </div>
    <button type="submit">
        <template v-if="waiting">Laden</template>
        <template v-if="!waiting">Abschicken</template>
    </button>
    <p v-if="errors">Etwas lief schief!</p>
    <p v-if="success">Abgeschickt!</p>
</form> -->
<form action="https://public.herotofu.com/v1/e7d43540-c280-11ed-8c56-2592b5cf6c22" method="post" accept-charset="UTF-8">
   <a href="https://app.herotofu.com/">herotofu</a>
    <div class="input-wrapper">
        <label for="email">E-Mail</label>
        <input required v-model="form.email" type="email" name="email">
    </div>
    <div class="input-wrapper">
        <label for="name">Name</label>
        <input required v-model="form.name" type="text" name="name">
    </div>
    <div class="input-wrapper">
        <label for="subject">Betreff</label>
        <input required v-model="form.subject" type="text" name="subject">
    </div>
    <div class="input-wrapper">
        <label for="subject">Nachricht</label>
        <textarea rows="4" required v-model="form.subject" type="text" name="message">
        </textarea>
    </div>
    <button type="submit">
        <template v-if="waiting">Laden</template>
        <template v-if="!waiting">Abschicken</template>
    </button>
</form>

</template>

<script setup lang="ts">
    import { ref } from 'vue';
  

    const form = ref({
        email:'',
        name:'',
        subject:'',
        message:''
    });
    const waiting = ref(false);
    const errors = ref(false);
    const success = ref(false);
    
    async function submit(form:any) {
        
    }

</script>
<style scoped lang="scss">

    form{
        margin:0 auto;
        width:50%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .input-wrapper{
            display: flex;
            flex-direction: column;
            width:100%;
            label{
                font-size: 1rem;
            }
            input,
            textarea{
                border:none;
                border-radius: 0.5rem;
                margin:0.2rem 0 0 0;
                background-color: var(--p-light-gray);
                color:black;
            }
            textarea{
                min-height: 10rem;
            }
        }
        
        button{
            border:none;
            padding: 1rem;
            border-color: 0.5rem;
            color:black;
        }
    }
</style>
