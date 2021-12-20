/*!!
 * Power Panel Randon <https://github.com/carlos-sweb/pp-randon>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/12/20 16:37 PM)
 * Released under the MIT License
 */
(function(global,factory){
  var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global;
    if (typeof define === 'function' && define.amd) {
      define(['exports'], function(exports) {
        root.ppRandom = factory( root , exports  );
      });
    } else if (typeof exports !== 'undefined') {
      module.exports = factory(root, exports );
    } else {
      root.ppRandom = factory(root, {} );
    }
})(this,function( root, exports ){
    var letterContainer = [
      'a','b','c','d','e',
      'f','h','i','j','k',
      'l','m','n','o',
      'p','q','r','s','t',
      'u','v','y','z'] ,
  numberContainer = [0,1,2,3,4,5,6,7,8,9],
  symbolsContainer = ['!','$','%','&','/','(',')','=','?','¿','.','*'],
  random = function( length , container ){
        var vtr = '';
        for( var i = 0; i < length ; i++   ){
            var indice = Math.floor(Math.random() * ( container.length  - 0 ));
            vtr += container[indice];
        }
        return vtr;
    }
    return function(  length , letter , number , symbols ){
         letter = ( letter === undefined ) ? true : letter;
         number = ( number === undefined ) ? false : number;
         symbols = ( symbols === undefined ) ? false : symbols;
         var containerMain = [];
         if( letter ){containerMain = containerMain.concat( letterContainer )}
         if( number ){containerMain = containerMain.concat( numberContainer )}
         if( symbols ){containerMain = containerMain.concat( symbolsContainer )}
         return containerMain.length === 0 ? null : random( length , containerMain  );
    };
});
