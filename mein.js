function findLatestWeight(weights) {
    var iter = 0
    for(i = weights.length - 1; i > 0; i--) {
        const cur = weights.length - 1 === i;         
    
        if(iter == 0) {
            function compareNumeric(a, b) {
                if (a > b) return 1;
                if (a == b) return 0;
                if (a < b) return -1;
            }
           
            weights.sort(compareNumeric); 
            iter = 1;
        }
     
        resultAnnihilation = (weights[i] === weights[i-1]) ? 0 : weights[i] - weights[i-1];    
              
        weights = weights.slice(0,i-1)       
    
        if (!resultAnnihilation) {
            if (weights.length == 0) {
                weights[0] = 0
            }   
            i--;
        } else {            
            for(e = 0; e<weights.length; e++) {
                if(weights[e] >= resultAnnihilation) {                    
                    weights.slice(e, 0, resultAnnihilation)  // не верно            
                    break;                   
                } else if(weights.length-e == 1) {
                    weights.push(resultAnnihilation)                  
                    break;
                }          
            }; 
            if(weights.length == 0){
                weights.push(resultAnnihilation)                
                break;
            }          
        }         
    }
    return weights[0];     
}

module.exports = findLatestWeight;
