const guessLang = require('franc');
const lang =  require('langs');
//console.dir(guessLang);
//const langcode = guessLang('Alle menslike wesens word vry') // => 'afr'
const input =  process.argv[2];
const langcode = guessLang(input);

if(langcode === 'und')
{
console.log("Sorry, Couldn't figure it out");
}
else
{
    try{
      const langDef = lang.where("3",langcode);
      console.log(`Our best guess is ${langDef.name}`)
    }
    catch
    {
        console.log('LangCode is not Defined! Aplogzies!!')

    }
} 
