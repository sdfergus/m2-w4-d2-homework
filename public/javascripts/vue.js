var vm1 = new Vue({
    el: 'body #container',
    components: {
        'foodblogtitle': {
            template: '<span>Food Blog</span>'
        },
        'commentstitle': {
            template: '<h2>Comments</h2>'
        },
        'chickenchilliimg': {
            template: '<img src="/images/chili.jpg" alt="White Chicken Chili" width="180">'
        },
        'navbar': {
            template: '<nav class="navbar navbar-light navbar-expand-lg py-0 px-0 position-absolute"><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded = "false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarContent"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">Recipes</a></li><li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li><li class="nav-item"><a class="nav-link" href="#">Videos</a></li><li class="nav-item"><a class="nav-link" href="#">About</a></li></ul></div></nav>'
        }
    },
    data: {
        post1: {
            src:'/images/profile.png',
            author:'Brianna', 
            date: 'February 18, 2021 @ 3:30 pm', 
            reply: 'REPLY', 
            comment: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!',
            desc: {
                name: 'BRIANNA',
                level: 'Novice',
                bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!'
            }
        },
        post2: {
            src:'/images/profile.png',
            author:'LINH', 
            date: 'February 15, 2021 @ 9:46 am', 
            reply: 'REPLY', 
            comment: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!',
            desc: {
                name: 'LINH',
                level: 'Newcomer',
                bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
            }
        },
        post3: {
            src:'/images/profile.png',
            author:'CATHERINE LEONARDO', 
            date: 'February 13, 2021 @ 12:58 pm', 
            reply: 'REPLY', 
            comment: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.',
            desc: {
                name: 'CATHERINE',
                level: 'Mentor',
                bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!'
            }
        },
        post4: {
            src:'/images/profile.png',
            author:'KALI', 
            date: 'February 13, 2021 @ 11:31 am', 
            reply: 'REPLY', 
            comment: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!',
            desc: {
                name: 'KALI',
                level: 'Novice',
                bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I\'m a food whore! Invite me over for dinner and I\'ll be there!'
            }
        },
        show: false,
        userInfo:{}
    },
    methods: {
        showDesc: function(event) {
            
            var userAlt = event.target.attributes.alt.value;

            //Set 'show' to true so that the Modal appears
            this.show = true;

            //Check which profile img alt is selected to be returned
            if(userAlt.includes("Brianna")) {
                return this.userInfo = this.post1.desc;
            } else if(userAlt.includes("Linh")) {
                return this.userInfo = this.post2.desc;
            } else if(userAlt.includes("Catherine")) {
                return this.userInfo = this.post3.desc;
            } else if(userAlt.includes("Kali")) {
                return this.userInfo = this.post4.desc;
            } else {
                this.show = false;
            }
        }, 
        closeModal: function() {
            this.show = false;
        }
    }
});