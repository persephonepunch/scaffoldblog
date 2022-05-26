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




<svelte:head>
<title>Tailwind-Daisy UI Graph CMS Scaffold</title>
</svelte:head>


<div class="hero min-h-screen mb-50" style="background-image: url(https://hagenblack-11ty.netlify.app/assets/images/jane-beiles-9456-2-p-1080.jpeg?w=1000&h=800);">
  <div class="hero-overlay bg-black bg-opacity-20"></div>
  <div class="hero-content text-left text-neutral-content">
    <div class="max-w-xl justify-start">
      <h1 class="mb-5 text-5xl font-thin text-white tracking-[.45em] "> HAGEN BLACK</h1>
      <p class="mb-5 text-white text-sm tracking-widest">INTERIOR DESIGN</p>
  
    </div>
  </div>
</div>




<div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative mt-10 ">

{#each posts as {title, slug, excerpt, coverImage, tags }}
<div class="card justify-center mx-auto max-w-xl text-center shadow-2xl mb-20">
<figure class="px-10 pt-10">
  <img class="object-cover" src={coverImage.url} alt={`Cover Image For ${title} `}/>
 </figure>

 <div class="card-body">
   <h2 class="title">{title}</h2>
   <p class="text-gray-900">{excerpt}</p>
 </div>

  <div class="justify-center card-actions">
    <a href={`/posts/${slug}`} 
    class ="btn btn-outline btn-primary text-white mb-20">
    Read More
    </a>
  </div>



</div>

{/each}
</div>

<div>
    <div class="grid grid-cols-1  gap-4 relative ">


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


