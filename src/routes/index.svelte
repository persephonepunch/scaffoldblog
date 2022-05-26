<script context="module">
  export const load = async({fetch}) => {
    const res = await fetch ('/posts.json')
    if (res.ok){
      const {posts} = await res.json()
      return {
        props: {posts},
  
        }
    }
  }
</script>


<script>
  export let posts
</script>


<pre>{JSON.stringify(posts, null, 2)}</pre>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>











<div>
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






    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative ">


            <div>
                <div class="collapse">
                    <input type="checkbox" class="peer" /> 
                    <div class="collapse-title bg-primary text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>



<div>
  <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label for="my-drawer" class="btn btn-primary text-xs text-white  drawer-button">Open drawer</label>
      </div> 
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
          
        </ul>
      </div>
    </div>



    </div>


    

      <!--drawer 2-->


      <div class="drawer drawer-end mt-8">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>

    </div>
</div>


