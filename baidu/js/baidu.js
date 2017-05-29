window.onload = function()
     {
        var text = document.getElementById('s_input');
        var text_ipt = document.getElementById('kw');
            // 移进
            text.onmouseover = function()
            {
                if(text.style.borderColor=="rgb(0, 0, 255)")
                {
                    ;
                }

                else{
                    text.style.borderColor="rgb(161, 161, 161)";
                }
                
            } 
            // 移出
            text.onmouseout = function()
            {
                //没点击，回复原来的颜色 

                if(text.style.borderColor=="rgb(161, 161, 161)")
                {
                 text.style.borderColor="rgb(182, 182, 182)";
                }
            }
            // 聚焦input
            text_ipt.onfocus = function()
            {
                text.style.borderColor="rgb(0, 0, 255)";
            }      
            // 失焦input
            text_ipt.onblur = function()
            {
                text.style.borderColor="rgb(182, 182, 182)";
            }
        }