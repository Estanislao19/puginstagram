<script>
    import {onMount} from 'svelte'
    import Header from '../components/Header.svelte'
    import Main from '../components/Main.svelte'
    import Sidebar from '../components/Sidebar.svelte'
    import TimeLine from '../components/TimeLine.svelte'


    let data = {};
    const API = "https://dog.ceo/api/breeds/list/all"
    console.log(API);

    onMount(async () =>{
        const response = await fetch()
        data = await response.json()
        console.log('dataa', response);
    })

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat&family=Pacifico&display=swap');

   :global(body){
    background-color: #fafafa;
    color: rgba(38,38,38,0.7);
    font-family: "Lato", sans-serif;
    margin: 0;
    padding: 0;
   }
   :global(h1,h2,h3){
    margin: 0;
    padding: 0;
   } 
</style>

<Header/>
<Main>
    <TimeLine post={data.posts}/>
    <Sidebar {...data.user}/>
</Main>

