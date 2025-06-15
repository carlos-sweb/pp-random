(function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
      typeof define === 'function' && define.amd ? define(factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ppRandom = factory());
})(this, (function () { 'use strict';

      const has = (config,property)=>config.hasOwnProperty(property),
      getValConfig =(config,property)=>{
            return has(config,property) ? (config[property] === true ||config[property] === false ? config[property] : false ) : true
      },
      ppRandom = function( length = 10 , config = {} ){
            var self = this;
            if(!(self instanceof ppRandom)){ return new ppRandom(length,config) }
            self.length = length;      
            self.use = {
                  upperCase:getValConfig(config,'upperCase'),
                  lowerCase:getValConfig(config,'lowerCase'),
                  number:getValConfig(config,'number'),
                  symbols:getValConfig(config,'symbols'),
                  exclude:Array.isArray(config.exclude)?config.exclude:[]
            };

            self.letterContainer = 'abcdefghijklmnopqrstuvyz';
            self.numberContainer = '0123456789',

            self.symbolsContainer = [
                  '-','_', // 
                  '&','/',',','^','@','.','#',':','%','\\','=','\'',,'$','*','`',';','+',//
                  '[',']','(',')','{','}','<','>' //
            ];
            
            self.get = ()=>{
            let optArray = [],tmpArray = [];
            if(self.use.upperCase)tmpArray=tmpArray.concat(self.letterContainer.toUpperCase().split(""));
            if(self.use.lowerCase)tmpArray=tmpArray.concat(self.letterContainer.toLowerCase().split(""));
            if(self.use.number)tmpArray=tmpArray.concat(self.numberContainer.split(""));
            if(self.use.symbols)tmpArray=tmpArray.concat(self.symbolsContainer);
            
            // Clean exclude caracteres
            self.use.exclude.forEach((char)=>tmpArray.includes(char) && tmpArray.splice( tmpArray.indexOf(char) , 1 ));
            
            if( tmpArray.length != 0){
             while( optArray.length < self.length ){
                  optArray.push(
                        tmpArray[ Math.floor(Math.random() * ( tmpArray.length  - 0 )) ]
                  );
             }
            }     

            return optArray.join("");

            };

      };

      return ppRandom;

}));
