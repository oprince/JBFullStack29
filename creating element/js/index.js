
            function getElements(tagName){
                let elements = document.getElementsByTagName(tagName);
                let elementsString = "";
                for (let index = 0; index < elements.length; index++) {
                    const element = elements[index];
                    elementsString += element.id;
                    elementsString += '<br>';                    
                }
                document.getElementById('elementsList').innerHTML =  elementsString;
            }
        
            document.getElementById("showh2").addEventListener("click", ()=>{

              let div = document.createElement("div");
              let p;
              let textNode;
              let h2Arr = document.querySelectorAll("h2");
              
              h2Arr.forEach((h2)=>{
                p = document.createElement("p");
                textNode = document.createTextNode(h2.innerHTML);
                p.appendChild(textNode);
                div.appendChild(p);
              });
              document.body.appendChild(div);
            })