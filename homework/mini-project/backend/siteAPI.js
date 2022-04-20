import axios from 'axios'
import cheerio from 'cheerio'


export async function preferAPI(prefer){
    
      if(prefer.includes("https") === false){
      prefer = prefer.padStart(prefer.length+8,"https://")
      
      let result = {}
      const aaa = await axios.get(prefer)
      const $ = cheerio.load(aaa.data)
      $("meta").each((_, el) => {
        if($(el).attr('property')){
  
          const key = $(el).attr('property').split(":")[1]
          const value = $(el).attr('content')
          
          result[key] = value
        }
      })
    
    
    return result
    }

}

