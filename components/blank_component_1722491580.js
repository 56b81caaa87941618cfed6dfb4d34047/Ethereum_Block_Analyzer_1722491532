/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722491580", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-gradient-to-br from-pink-400 via-purple-500 to-black flex-1 min-h-screen">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-8 text-white">
                        <h2 class="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">Cosmic Dreams</h2>
                        <p class="text-lg mb-4">Explore the surreal landscapes of distant worlds.</p>
                        <div class="flex items-center space-x-4">
                            <i class='bx bx-planet text-3xl text-pink-300'></i>
                            <span class="text-xl font-semibold">Journey through the stars</span>
                        </div>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
