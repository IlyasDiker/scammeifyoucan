<template>
    <section id="free-chapters" aria-label="Free preview" class="scroll-mt-14 bg-green-600 sm:scroll-mt-32">
        <div class="overflow-hidden lg:relative">
            <div
                class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32">
                <svg aria-hidden="true" width="432" height="184"
                    class="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3">
                    <defs>
                        <symbol id=":Rd6:-0" width="40" height="40">
                            <rect class="fill-green-500" width="40" height="40"></rect>
                            <circle class="fill-green-600" cx="20" cy="20" r="13"></circle>
                        </symbol>
                        <symbol id=":Rd6:-1" width="40" height="40">
                            <circle class="fill-green-300" cx="20" cy="20" r="20"></circle>
                            <rect class="fill-green-600" width="20" height="20" x="10" y="10"></rect>
                        </symbol>
                    </defs>
                    <use href="#:Rd6:-0" x="0" y="0"></use>
                    <use href="#:Rd6:-1" x="56" y="0"></use>
                    <use href="#:Rd6:-0" x="112" y="0"></use>
                    <use href="#:Rd6:-1" x="168" y="0"></use>
                    <use href="#:Rd6:-1" x="224" y="0"></use>
                    <use href="#:Rd6:-0" x="280" y="0"></use>
                    <use href="#:Rd6:-1" x="336" y="0"></use>
                    <use href="#:Rd6:-0" x="392" y="0"></use>
                    <use href="#:Rd6:-1" x="0" y="48"></use>
                    <use href="#:Rd6:-0" x="56" y="48"></use>
                    <use href="#:Rd6:-1" x="112" y="48"></use>
                    <use href="#:Rd6:-1" x="168" y="48"></use>
                    <use href="#:Rd6:-0" x="224" y="48"></use>
                    <use href="#:Rd6:-0" x="280" y="48"></use>
                    <use href="#:Rd6:-0" x="336" y="48"></use>
                    <use href="#:Rd6:-1" x="392" y="48"></use>
                    <use href="#:Rd6:-0" x="0" y="96"></use>
                    <use href="#:Rd6:-1" x="56" y="96"></use>
                    <use href="#:Rd6:-0" x="112" y="96"></use>
                    <use href="#:Rd6:-1" x="168" y="96"></use>
                    <use href="#:Rd6:-1" x="224" y="96"></use>
                    <use href="#:Rd6:-0" x="280" y="96"></use>
                    <use href="#:Rd6:-1" x="336" y="96"></use>
                    <use href="#:Rd6:-0" x="392" y="96"></use>
                    <use href="#:Rd6:-1" x="0" y="144"></use>
                    <use href="#:Rd6:-0" x="56" y="144"></use>
                    <use href="#:Rd6:-1" x="112" y="144"></use>
                    <use href="#:Rd6:-1" x="168" y="144"></use>
                    <use href="#:Rd6:-0" x="224" y="144"></use>
                    <use href="#:Rd6:-0" x="280" y="144"></use>
                    <use href="#:Rd6:-0" x="336" y="144"></use>
                    <use href="#:Rd6:-1" x="392" y="144"></use>
                </svg>
                <div>
                    <h2
                        class="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
                        Get the free sample chapters</h2>
                    <p class="mt-4 text-lg tracking-tight text-green-200">Enter your email address and I’ll send you a
                        sample from the book containing two of my favorite chapters.</p>
                </div>
                <form class="lg:pl-16 flex flex-col" @submit.prevent="submitForm">
                    <h3 class="text-base font-medium tracking-tight text-white">Get two free chapters straight to your
                        inbox <span aria-hidden="true">→</span>
                    </h3>
                    <div class="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
                        <div class="relative sm:static sm:flex-auto"><input type="email" id="email-address" required=""
                                aria-label="Email address" placeholder="Email address"
                                class="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3">
                            <div
                                class="absolute inset-0 rounded-md border border-white/20 peer-focus:border-green-300 peer-focus:bg-green-500 peer-focus:ring-1 peer-focus:ring-green-300 sm:rounded-xl">
                            </div>
                        </div>
                        <button
                            class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-green-600 hover:text-green-700 focus-visible:text-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-green-50 active:text-green-900/80 disabled:opacity-40 disabled:hover:text-green-600 mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
                            type="submit">Get free chapters
                        </button>
                    </div>
                    <span ref="messageText"
                        :class="isPosted == true ? '' : 'hidden'"
                         class="mt-3 flex transition-transform text-sm font-medium py-2 px-4 tracking-tight text-green-600 bg-white rounded-xl">
                        You will receive nothing, Now go away!
                    </span>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    data () {
        return {
            isPosted: false
        }
    },
    methods:{
        submitForm(){
            this.isPosted = true
        }
    }
}
</script>