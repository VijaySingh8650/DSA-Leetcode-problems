var islandPerimeter = function(grid) {
    var peri = 0;
    for(i=0;i<grid.length;i++){
        for(j=0;j<grid[0].length;j++){
            var count = 0;
            if(grid[i][j]===1){
               
                if(i===0)count++;
                if(j===0)count++;
                if(i===grid.length-1)count++;
                if(j===grid[0].length-1)count++;
               
                  if( grid[i-1]?.[j]===0)count++;  
                
                
                    if( grid[i+1]?.[j]===0)count++;
                
             
                  if( grid[i]?.[j-1]===0)count++;  
              
                    if( grid[i]?.[j+1]===0)count++;
                
                peri+=count;
                
                
            }
            
        }
    }
    return peri;
};