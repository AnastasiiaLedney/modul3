<template>
<div class="PhotoVue"  text-align: center>
 <h1>Що таке Fetch API?</h1>
 <h3>Fetch API надає інтерфейс для отримання ресурсів (в тому числі по мережі). Він здасться знайомим кожному, хто використовував XMLHttpRequest, але новий API є більш потужним і гнучким набором функцій.</h3>
 <h3>Fetch забезпечує узагальнене визначення об'єктів Requestі Response(і інших речей, пов'язаних з мережевими запитами). Це дозволить їм використовуватися всюди, де необхідно в майбутньому, в тому числі і для service workers, Cache API і інших подібних технологій, які обробляють або змінюють запити (requests) і відповіді (responses), а так само в будь-яких інших випадках, які можуть зажадати від вас генерувати свій власний відповідь програмно.</h3>
 <h3>Це також надає визначення в відношення таких понять, як CORS і семантика заголовків HTTP origin, замінюючи їх відокремлені визначення де б то не було.</h3>
 <h3>Щоб створити запит і отримати дані, використовується метод GlobalFetch.fetch (en-US) . Він реалізований у безлічі інтерфейсів, в тому числі в Windowі WorkerGlobalScope. Це дозволяє використовувати його практично в будь-якому контексті для отримання даних.</h3>
<h3>Метод fetch()приймає один обов'язковий аргумент - шлях до даних, які ви хочете отримати. Він повертає promise, який дозволяється в ( Response) незалежно від того, чи був запит вдалим. Ви можете також передати в другому аргументі необов'язковий об'єкт із зазначенням опцій (див. Request.)</h3>
<h3>Як тільки Responseвиконається успішно, стають доступними різні методи для визначення тіла контенту і, як його вміст має бути оброблено (див. Body.)</h3>
<h3>Можна створювати запит і відповідь безпосередньо, використовуючи конструктори Request() (en-US) і Response(), але малоймовірно, що в цьому є необхідність. Навпаки, більш імовірно, що вони будуть створені як результат роботи іншого API (наприклад, FetchEvent.respondWith (en-US) в service workers.)</h3>
 </div>


</template>

<script>
export default
{
  name:"App",
  data()
  { return{
  
  }
  }

}
</script>

<style scoped>

.PhotoVue{
position: absolute;
border-radius: 10px 60px 30px;
width: 900px;
height: 600px;
position: relative;

text-align: center;
 margin: auto;

}
h1{
 font-family: "Courier New";
     font-size: 50px;
     color:  #86760a;
}
h3
{
 font-family: "Courier New";
     font-size: 20px;
     color:  #7a0975;
}
 
</style>