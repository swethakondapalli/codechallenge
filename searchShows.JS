const searchform = document.querySelector("#searchFrmid");
searchform.addEventListener("submit", async function(e) 
                            {
                             e.preventDefault();                             
                            const query= searchform.elements.searchinput.value;
                            const config =  {params:{q:query}}
                            const res=  await axios.get('http://api.tvmaze.com/search/shows', config);
                            console.log(res.data);
                            makeImages(res.data);
                            
                                                                 
                            })

  const makeImages = (shows)=> {
       for (let result of shows)
        {
            if(result.show.image)
            {
            const img = document.createElement('IMG'); 
            img.src =  result.show.image.medium;
            document.body.append(img);

            }
        
        }
  }                          