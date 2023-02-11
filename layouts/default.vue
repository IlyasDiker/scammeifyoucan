<template>
    <Html class="antialiased">
        <Head>
            <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1,800,500,100,700,400,300,200,900&display=swap" rel="stylesheet">
        </Head>
        <Body>
            <slot></slot>
        </Body>
    </Html>
</template>

<script>
export default{
    setup(){
    }
}
</script>