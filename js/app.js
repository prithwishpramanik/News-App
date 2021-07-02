$("document").ready(function(){
        $.ajax({
            url:"https://newsapi.org/v2/top-headlines?country=in&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
            success:function(data){
                console.log(data);

                $("#Line1").text(data.articles[1].title);
                $("#Line2").text(data.articles[2].title);
                $("#Line3").text(data.articles[3].title);
                $("#des1").text(data.articles[1].description);
                $("#des2").text(data.articles[2].description);
                $("#des3").text(data.articles[3].description);
                $("#img1").attr("src",data.articles[1].urlToImage);
                $("#img2").attr("src",data.articles[2].urlToImage);
                $("#img3").attr("src",data.articles[3].urlToImage);
                $("#card1").attr("href",data.articles[5].url);
                $("#card2").attr("href",data.articles[5].url);
                $("#title1").text(data.articles[4].title);
                $("#title2").text(data.articles[5].title);
                $("#para1").text(data.articles[4].description);
                $("#para2").text(data.articles[5].description);

                $("#img4").attr("src",data.articles[4].urlToImage);
                $("#img5").attr("src",data.articles[5].urlToImage);

                $("#headline").text(data.articles[0].description);
                $("#headimg1").attr("src",data.articles[0].urlToImage);
                $('#time').text("Published At:-" +data.articles[0].publishedAt);

                let blobone =""
                for(let i=6;i<10;i++){


                    blobone= blobone + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.articles[i].title}</h5>
                        <p class="card-text">${data.articles[i].description}</p>
                        
                        <a href="${data.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                    $('#briefrow1').html(`
                ${blobone}
                `)


                }






            },
            error:function(){
                alert("some error occurred")

            }
        })
        $.ajax({
            url:"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
            success: function(data1){
                let blob =""
                for(let i=6;i<10;i++){


                    blob= blob + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data1.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data1.articles[i].title}</h5>
                        <p class="card-text">${data1.articles[i].description}</p>
                         <a href="${data1.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                    $('#briefrow').html(`
                ${blob}
                `)


                }

            },
            error:function(){
                console.log(errors);
            }

        })

        $.ajax({
            url:"https://newsapi.org/v2/top-headlines?language=en&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
            success:function(data2){
                console.log(data2);
                let blobtwo =""
                for(let i=6;i<10;i++){


                    blobtwo= blobtwo + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data2.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data2.articles[i].title}</h5>
                        <p class="card-text">${data2.articles[i].description}</p>
                        
                        <a href="${data2.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                    $('#briefrow2').html(`
                ${blobtwo}
                `)


                }

            }
        })
        $.ajax({
            url:"https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
            success:function(data3){
                console.log(data3);
                let blobtwo =""
                for(let i=6;i<10;i++){


                    blobtwo= blobtwo + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data3.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data3.articles[i].title}</h5>
                        <p class="card-text">${data3.articles[i].description}</p>
                         <a href="${data3.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                    $('#briefrow3').html(`
                ${blobtwo}
                `)


                }

            }
        })
        $.ajax({
            url:"https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
            success:function(data4){
                console.log(data4);
                let blobtwo =""
                for(let i=6;i<10;i++){


                    blobtwo= blobtwo + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data4.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data4.articles[i].title}</h5>
                        <p class="card-text">${data4.articles[i].description}</p>
                         <a href="${data4.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                    $('#briefrow4').html(`
                ${blobtwo}
                `)


                }

            }
        })
        $.ajax({
            url:"https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
            success:function(data5){
                console.log(data5);
                let blobtwo =""
                for(let i=1;i<5 ;i++){


                    blobtwo= blobtwo + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data5.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data5.articles[i].title}</h5>
                        <p class="card-text">${data5.articles[i].description}</p>
                         <a href="${data5.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                    $('#briefrow5').html(`
                ${blobtwo}
                `)


                }

            }
        })
        $.ajax({
            url:"https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
            success:function(data6){

                let blobtwo =""
                for(let i=0;i<4 ;i++){


                    blobtwo= blobtwo + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data6.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data6.articles[i].title}</h5>
                        <p class="card-text">${data6.articles[i].description}</p>
                         <a href="${data6.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                    $('#briefrow6').html(`
                ${blobtwo}
                `)


                }

            }
        })
    $.ajax({
        url:"https://newsapi.org/v2/top-headlines?language=en&category=health&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
        success:function(data7){

            let blobtwo =""
            for(let i=0;i<4 ;i++){


                blobtwo= blobtwo + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data7.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data7.articles[i].title}</h5>
                        <p class="card-text">${data7.articles[i].description}</p>
                         <a href="${data7.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                $('#briefrow7').html(`
                ${blobtwo}
                `)


            }

        }
    })
    $.ajax({
        url:"https://newsapi.org/v2/top-headlines?language=en&category=science&apiKey=4c9228ed94db425a9b1bc3c7389ea781",
        success:function(data8){

            let blobtwo =""
            for(let i=0;i<4 ;i++){


                blobtwo= blobtwo + `
                <div class="col-6">
                <div class="p-3">
                    <div class="card" style="width: fit-content;">
                    <img src=${data8.articles[i].urlToImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data8.articles[i].title}</h5>
                        <p class="card-text">${data8.articles[i].description}</p>
                         <a href="${data8.articles[i].url}" class="stretched-link"></a>
                    </div>
                </div>
                </div>
            </div>
                `;
                $('#briefrow8').html(`
                ${blobtwo}
                `)


            }

        }
    })




    }
)