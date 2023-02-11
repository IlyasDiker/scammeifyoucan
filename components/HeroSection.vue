<template>
    <header class="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
        <div
            class="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
            <div class="relative flex items-end lg:col-span-5 lg:row-span-2">
                <div
                    class="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-[5rem] bg-green-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
                    <svg aria-hidden="true" class="absolute inset-0 h-full w-full">
                        <defs>
                            <pattern id=":R196:" width="128" height="128" patternUnits="userSpaceOnUse" x="100%"
                                y="100%" patternTransform="translate(112 64)">
                                <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#:R196:)"></rect>
                    </svg></div>
                <div class="relative z-10 mx-auto flex w-64 rounded-xl bg-green-900 shadow-xl md:w-80 lg:w-auto">
                    <!-- <nuxt-img src="/cover.webp" width="960" height="1284"/> -->
                    <img src="@/assets/images/cover.webp" 
                        decoding="async" class="w-full"
                        alt="Book Cover of Scam me of you can">
                    </div>
            </div>
            <div class="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
                <div
                    class="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100">
                </div>
                <figure class="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
                    <div class="flex justify-center text-green-600 lg:justify-start">
                        <div class="flex gap-1"><IconStar/><IconStar/><IconStar/><IconStar/><IconStar/></div>
                    </div>
                    <blockquote class="mt-2">
                        <p class="font-display text-xl font-medium text-slate-900">
                            “3 month after i bought this book, and still received nothing i understood everything. I wish I had known this a lot sooner.”
                        </p>
                    </blockquote>
                    <figcaption class="mt-2 text-sm text-slate-500"><strong
                            class="font-semibold text-green-600 before:content-['—_']">Driss Bokhnouna</strong>, Clown at YouCant.ma</figcaption>
                </figure>
            </div>
            <div class="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
                <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <h1 class="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">Get lost in the world of
                        con artists.</h1>
                    <p class="mt-4 text-3xl text-slate-600">A book that teaches you valuable lesson on how to not get scamed in the future.</p>
                    <div class="mt-8 flex gap-4">
                        <a
                            class="inline-flex justify-center rounded-md py-1.5 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-green-600 text-white hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:bg-green-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-green-600"
                            href="/#free-chapters">Get sample chapter</a>
                        <a
                            class="inline-flex justify-center rounded-md border py-1.5 px-4 text-base font-semibold tracking-tight focus:outline-none border-green-300 text-green-600 hover:border-green-400 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:text-green-600/70 disabled:opacity-40 disabled:hover:border-green-300 disabled:hover:bg-transparent"
                            href="/#pricing">Buy book</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>