class Slideshow {
        constructor(targetID, images, captions) {
            this.images = images;

            this.targetID = targetID;

            this.index = 0;

            var html = `<div class="slideshow-container fade-left">`;

            for (var i = 0; i < images.length; i++) {
                html += `<div class="slide-img fade fade-right" onclick="OpenModal('${images[i]}');">
                            <div class="numbertext">${i+1} / ${images.length}</div>
                            <img src="${images[i]}" style="width:100%">
                            <div class="text">${captions[i]}</div>
                        </div>`
            }

            html += `<a class="prev">&#10094;</a>
                     <a class="next">&#10095;</a>`

            html += `</div>
                     <div style="text-align:center">`;

            for (var i = 0; i < images.length; i++) {
                html += `<span class="dot"></span>`;
            }

            document.getElementById(targetID).innerHTML += html + "</div></div>";

            var me = this;

            $('#' + this.targetID).find(".dot").on("click", function() {
                me.SetIndex($(this));
            })

            $('#' + this.targetID).find(".prev").on("click", function() {
                me.PrevSlide();
            });

            $('#' + this.targetID).find(".next").on("click", function() {
                me.NextSlide();
            });

            this.UpdateUI();
        }

        NextSlide() {
            this.index = (this.index + 1) % this.images.length;
            this.UpdateUI();
        }

        PrevSlide() {
            this.index = (this.index - 1) % this.images.length;
            this.UpdateUI();
        }

        SetIndex(elem) {
            var index = elem.index();

            this.index = index;
            this.UpdateUI();
        }

        UpdateUI() {
            var slides = $('#' + this.targetID).find(".slide-img");
            var dots = $('#' + this.targetID).find(".dot");

            $(slides).css("display", "none");
            $(dots).removeClass("active");

            $(slides).eq(this.index).css("display", "block");
            $(dots).eq(this.index).addClass("active");
        }
    }
    
    function OpenModal(imgSrc){
        $('.modal img').attr("src", imgSrc);
        $('.modal').fadeIn();
    }
    
    function CloseModal(){
        $('.modal').fadeOut();
    }
    
    $('.modal').hide();