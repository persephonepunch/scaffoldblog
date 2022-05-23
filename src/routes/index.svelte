
<main class="container mx-auto max-w-7xl">

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>


    <div class="grid grid-cols-3 gap-4 relative ">
            <div class="card lg:card-side bg-base-100 shadow-xl p-2">
                <figure><img class="object-contain" src="https://hagenblack-11ty.netlify.app/assets/images/jane-beiles-9456-2-p-1080.jpeg" alt="Album"></figure>
                <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
                </div>
            </div>

            <div>
                <div class="collapse">
                    <input type="checkbox" class="peer" /> 
                    <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>


    </div>


</div>

</main>