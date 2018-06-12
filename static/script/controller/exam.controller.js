define(['app'], function(app) {
    app.controller('examCtrl', ['$rootScope', '$scope', '$http','$interval', function($rootScope, $scope, $http,$interval) {
        var useTime = new Date();
        useTime.setHours(1);
        useTime.setMinutes(0);
        useTime.setSeconds(0);
        $scope.allTime = 3600;
        $scope.examSize = {
            height:'100%',
            size: '5px'
        };
        $scope.data = {
            leftTime:useTime.getTime(),
            showLeftTime:true
        };
        $scope.currentQuestion = 0;
        $scope.examIndex = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
        $scope.allQuestion = [{
            question:'如图,已知在正方形 ABCD 中,点 E、F 分别在 BC、CD 上,△ AEF 是等边三角形, 连接 AC 交 EF 于G ,下列说法正确的是如图,已知在正方形 ABCD 中,点 E、F 分别在 BC、CD 上,△ AEF 是等边三角形, 连接 AC 交 EF 于G ,下列说法正确的是',
            img:'images/questionImg.png',
            answerList : [{
                index:'A',
                text:'.BE=DF'
            },{
                index:'B',
                text:'.∠DAF=15°'
            },{
                index:'C',
                text:'.AC 垂直平分 EF'
            },{
                index:'D',
                text:'.BE+DF=EF'
            },{
                index:'E',
                text:'.AG=2CG'
            }]
        },{
            question: '月亮在中国的文化中,占据着非常重要的地位。不论是在文字中,还是在诗歌中,亦或 是在神话故事里,月亮都常常出镜。而对于月亮的起源,现代的科学家们有着不同的解 释。比较著名的有这几个假说:分裂说,同源说,撞击说。'+
            '分裂说是一个比较早期的解释。有些科学家认为,早期的地球自转速度非常的快,再加 上早期的地球由于刚刚形成,整颗星球温度很高,还尚未凝固。于是有一部分的地球物 质就被甩了出去(′д` )(...彡...彡)。这些被甩出去的物质最终形成了现在的月球。甚至 有人说,太平洋就是因为把月球甩出去后,留下的坑。'+
            '同源说的解释是,在形成早期地球的过程中,就在地球的旁边形成了地球的小兄弟—— 月球。也就是地球和月球是同时来自于同一个行星形成过程的。'+
            '然而这两个解说都不能解释,为何地球的地轴是倾斜的。现代人类已经知道,类似于太 阳系的诞生过程,是来自于一个转盘状的原始气盘,这个气盘在不断的自转,就像杂技 演员表演的转盘子那样。而在这个气盘中形成的星系,所有的星球都会规律地在这个圆'+
            '盘上运动,且自转的轴心的方向是相同的。然而我们的地球的地轴和其他星球相比,倾 斜了很多。'+
            '为了解决这个问题,又有科学家提出了‘撞击说’。科学家认为,在地球刚形成不久,有 一颗与火星差不多大的行星与地球发生了碰撞。巨大的力量把地球给撞歪了_(:з)∠)_。 两颗星球的物质融合在了一起。而一些比较轻的物质,则在地球的旁边形成了一个尘埃 环,类似于土星美丽的光环。这些物质逐渐的聚合成了现在的月球。'+
            '这个假说很好的解释了为何地球是倾斜的,也解释了为何月球的结构比地球松散很多。 但是到底是什么原因促使了月球的诞生,到现在为止还没有一个明确的结论。 根据文章内容,以下说法正确的是',
            answerList : [{
                index:'A',
                text:'.世界上关于月球诞生的解释共有三种:分裂说,同源说和撞击说。'
            },{
                index:'B',
                text:'.分裂说认为,月球曾经是地球的一部分。'
            },{
                index:'C',
                text:'.同源说很好的解释了地球是如何形成的。'
            },{
                index:'D',
                text:'.因为月球是由比较轻的物质构成的,所以月球比地球轻。'
            },{
                index:'E',
                text:'.撞击说认为,地球的地轴是被另外一颗行星撞歪的。'
            }]
        },{
            question: '请问下列五组图中,可以用来证明a2 −b2 =(a+b)(a−b)的有',
            answerList : [{
                index:'A',
                text:'.',
                imgSrc:'images/selectImg1.png'
            },{
                index:'B',
                text:'.',
                imgSrc:'images/selectImg2.png'
            },{
                index:'C',
                text:'.',
                imgSrc:'images/selectImg3.png'
            },{
                index:'D',
                text:'.',
                imgSrc:'images/selectImg4.png'
            },{
                index:'E',
                text:'.',
                imgSrc:'images/selectImg5.png'
            }]
        }];
        var interval1 = $interval(function () {
            $scope.data.leftTime -= 1000;
            $scope.allTime -=1;
        },1000);

        $scope.$watch('allTime',function(n){
            if(n == 0){
                $interval.cancel(interval1);
            }
        });
        $scope.changeQuestion = function (index) {
            $scope.currentQuestion = index
        };
        $scope.choose = function (answer) {
            answer.choose = !answer.choose;
        }
    }])
});