<script>
    import perfil from '$lib/WhatsApp Image 2024-06-25 at 09.03.57.jpeg'
    import calc from '$lib/WhatsApp Image 2024-06-25 at 10.57.57.jpeg'
    import githublogo from '$lib/icons8-github-50.png'
    import seta from '$lib/icons8-seta-para-a-frente-30.png'
    import html from '$lib/icons8-html-48.png'
    import css from '$lib/icons8-css-48.png'
    import js from '$lib/icons8-javascript-48.png'
    import ts from '$lib/icons8-texto-datilografado-48.png'
    import tailwind from '$lib/icons8-tailwindcss-48.png'
    import zapzap from '$lib/icons8-whatsapp-50.png'
    import { ProgressBar } from '@skeletonlabs/skeleton';
</script>
<body>
    <div class="bg-gradient-to-r from-primary-700 h-16 flex flex-row justify-between"><p class="font-bold py-3 mr-16 pl-10 h3 tracking-tight hover:tracking-wide inline">ERICK</p>
        <ul class="inline-block flex flex-row gap-16 font-bold py-4 pr-16">
            <li class="underline hover:underline-offset-4 cursor-pointer"><a href="#sobre"></a>Sobre Mim</li>
            <li class="underline hover:underline-offset-4 cursor-pointer"><a href=""></a>Projetos</li>
            <li class="underline hover:underline-offset-4 cursor-pointer"><a href=""></a>Habilidades</li>
            <li class="underline hover:underline-offset-4 cursor-pointer"><a href=""></a>Contato</li>
        </ul>
    </div>
    <div class="container grid-cols-2 mx-auto flex-column lg:flex-row text-center">
    <div id="container-1" class="inline-block mt-0 m-10 mr-32">
    <p class="underline">Desenvolverdor Front-End Iniciante</p>
    <h1 class="h1 font-bold inline py-32">Olá, <br> Sou Erick Venâncio</h1>
    <p class="">Tenho 15 anos e estou fazendo o 2º ano do ensino médio, <br>No momento estou fazendo Curso de Tecnologia da Informação(TI) <br> com enfâse em Informática para Internet no Instituto <br>Metrópole Digital(IMD) da UFRN.</p>
    <button class="border-2 p-2 mt-2 text-center rounded-xl border-primary-600 hover:border-primary-800 hover:bg-primary-500 hover:text-primary-50 text-primary-500 bg-transparent">Baixar Curriculo</button>
    </div>
    <div id="container-2" class="inline-block pt-20 ml-64">
    <img class="rounded-full w-72 flex cols-start-2" src="{perfil}" alt="perfil">
    </div>
    <p class="font-bold text-center mt-8">v <br> v <br> v <br> SCROLL TO DOWN</p>
    <h1 class="h1 font-bold mt-32 underline"> Sobre MIM</h1>
    <p class="mt-6 mb-20">extendendo sobre oque eu falei, desde pequeno me dou bem com tecnologia mas só vim ter contato de verdade com ela em 2023 quando comecei no módulo básico do meu curso de TI, estou atualmente no módulo intermediário e estou trabalhando com HTML, CSS, JavaScript e TypeScript, mas já tenho experiências com Svelte, TailwindCSS e JQuery.Estou em busca de adquirir novas experiências e/ou novos conhecimentos.</p>
    
    <h1 class="h1 font-bold underline text-center">Projetos</h1>
    <div id="cards" class="flex justify-center gap-8">
    <div class="card p-4 mt-6 inline-block">
        <img src="{calc}" class="w-72" alt="" srcset="">
        <h4 class="h4 font-bold my-3">Calculadora do Enem</h4>
        <p class="w-72 mb-4">Um projeto de Calculadora de notas do enem em que calcula sua média e mostra seu resultado caso você tivesse acertado determinadas questões em matemática, foi feito em svelte utilizando TypeScript para programação e Skeleton UI + TailwindCSS para estilização.</p>
        <button type="button" class="btn variant-filled w-40">
            <span><img class="w-6" src="{githublogo}" alt=""></span>
            <span><a href="https://github.com/erickven/calc-ENEM-skelton-main" target="_blank">Repositório</a></span>
        </button>
        <button type="button" class="btn variant-filled">
            <span><img src="{seta}" alt="" class="w-6"></span>
            <span><a href="https://calc-enem-skelton-main.vercel.app/" target="_blank">Deploy</a></span>
        </button>
    </div>
    <div class="card p-4 mt-6 inline-block w-72">
        <p class="text-center">Em Breve....</p>
    </div>
    <div class="card p-4 mt-6 inline-block w-72">
        <p class="text-center">Em Breve....</p>
    </div>
    </div>
    </div>
    <div class="my-32"><h1 class="h1 font-bold text-center underline mt-32">Habilidades</h1>
    <div class="flex flex-row justify-center gap-12 mt-10">
        <img src="{html}" alt="" class="w-40">
        <img src="{css}" alt="" class="w-40">
        <img src="{js}" alt="" class="w-40">
        <img src="{ts}" alt="" class="w-40">
        <img src="{tailwind}" alt="" class="w-40">
    </div>
    <div class="flex flex-row justify-center gap-12 mt-2">
        <ProgressBar class="w-40" value={100} max={100} />
        <ProgressBar class="w-40" value={90} max={100} />
        <ProgressBar class="w-40" value={60} max={100} />
        <ProgressBar class="w-40" value={80} max={100} />
        <ProgressBar class="w-40" value={70} max={100} />
    </div>
    </div>
    <footer id="contatos" class="w-screen bg-surface-800 fixed-bottom h-32">
        <div class="flex flex-row justify-center gap-3 mt-3">
            <button type="button" class="btn-icon variant-filled"><img src="{githublogo}" alt=""></button>
            <button type="button" class="btn-icon variant-filled"><img src="{zapzap}" class="w-9" alt=""></button>
            </div>
</footer>
</body>
