﻿"use strict";

/*//  change background color
function bgColor1() {
	
	document.body.style.fgroundColor = "red";
}
function bgColor2() {
	
	document.body.style.backgroundColor = "bgColor2";
}
function bgColor3() {
	
	document.body.style.backgroundColor = "gColor3";
}



$("#bgColor1").click(function() {
 $( 'div').removeClass();
 $( 'div').addClass('bgColor1');
});

$("#bgColor2").click(function() {
 $( 'div').removeClass();
 $( 'div').addClass('bgColor2');
});

$("#bgColor3").click(function() {
 $('div').removeClass();
 $('div').addClass('bgColor3');
});


// from YT Frontend Tips channel
$(function() {
  $('.navBar').click(function() {
    $('.stick').toggleClass('trigger');
  });
});*/

/*function toggleCP(){
	var cp = document.getElementById("cp");
	cp.style.height = window.innerHeight - 60+"px";
	if(cp.style.right === "0px"){
		cp.style.right = "-260px";
	} else {
		cp.style.right = "0px";
	}
}

    for(var i = 0; i < 40; i++){ document.write("<h2>"+(i+1)+". Dummy page content ... </h2>"); }
console.log(toggleCP);*/


/*
    function date() {
        var dateVal = document.getElementById("date").dateFormat.value;
        console.log("Your typed in " a + dateVal);
    }*/

/* $(function() {
     $( "#myTextField" ).datepicker({
		         changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
		 dateFormat: 'MMMM D',
        onClose: function(){
            validate($(this).val());
         }
     });
     
     $("#date2").click(function(){
         alert("You have selected :" + $( "#myTextField" ).val());
     });
     
     function validate(dateText){
         try {
            alert("You selected is : "+ $.datepicker.parseDate('mm/dd/yy',dateText));
          } catch (e) {
             alert("invalid date");
          }; 
    }
  });


$('#date').datepicker( {
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'dd MM'
    });

*/

// kh attempt work for calendar section

/*$("select").on("click", function () {
	if (addEventListener(Array(() === PickedDate())
	$(this).append("<quoteContainer>");
	
	return;
});
*/


/*$(document).ready(function(){
  $("#secondButton").click(function(){
    $("#deftext").val("Cindy");
  });
});


$('#textboxIdKH').datepicker().datepicker('setDate', theCurrentDate;*/



/*$(function() {
	$( "#Datepicker1" ).datepicker(); 
});*/

$(function (checkDate) {
	
	/*$( "" ).datepicker();*/ 
    var quotePicker = {
        "January 1": { "quote": "But this is the covenant that I will make with the house of Israel after those days, declares the Lord: I will put my law within them, and I will write it on their hearts.  And I will be their God, and they shall be my people.", "refTag": "Jeremiah 31:33" },
        "January 2": { "quote": "For by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin.", "refTag": "Romans 3:20" },
        "January 3": { "quote": "For the law brings wrath, but where there is no law there is no transgression.", "refTag": "Romans 4:13-15" },
        "January 4": { "quote": "Do not withhold good from those to whom it is due, when it is in your power to do it.", "refTag": "Proverbs 3:27" },
        "January 5": { "quote": "Better is a little with righteousness than great revenues with injustice.", "refTag": "Proverbs 16:8" },
        "January 6": {
            "quote": "A just balance and scales are the Lord’s; all the weights in the bag are his work.", "refTag": "Proverbs 16:11",
            "quote2": "Unequal weights are an abomination to the Lord, and false scales are not good.", "refTag2": "Proverbs 20:23"
        },
        "January 7": { "quote": "You shall do no wrong in judgment, in measures of length or weight or quantity. You shall have just balances, just weights, a just ephah, and a just hin. . .", "refTag": "Leviticus 19:35-36" },
        "January 8": { "quote": "Evil men do not understand justice, but those who seek the Lord understand it completely.", "refTag": "Proverbs 28:5" },
        "January 9": {
            "quote": "To do righteousness and justice is more acceptable to the Lord than sacrifice.", "refTag": "Proverbs 21:3",
            "quote2": "I desire mercy, and not sacrifice.", "refTag2": "Matthew 9:13"
        },
        "January 10": { "quote": "He loves righteousness and justice the earth is full of the steadfast love of the Lord.", "refTag": "Psalm 33:5" },
        "January 11": { "quote": "You shall do no injustice in court. You shall not be partial to the poor or defer to the great, but in righteousness shall you judge your neighbor.", "refTag": "Leviticus 19:15" },
        "January 12": { "quote": "So speak and so act as those who are to be judged under the law of liberty. For judgment is without mercy to one who has shown no mercy.  Mercy triumphs over judgment.", "refTag": "James 2:12-13" },
        "January 13": { "quote": "Do not judge by appearances, but judge with right judgment.", "refTag": "John 7:24" },
        "January 14": { "quote": "I will sing of steadfast love and justice to you, O Lord, I will make music.", "refTag": "Psalm 101:1" },
        "January 15": { "quote": "The King in his might loves justice.", "refTag": "Psalm 99:4" },
        "January 16": { "quote": "Righteousness and justice are the foundation of your throne; steadfast love and faithfulness go before you.", "refTag": "Psalm 89:14" },
        "January 17": { "quote": "Blessed are they who observe justice, who do righteousness at all times!", "refTag": "Psalm 106:3" },
        "January 18": { "quote": "The Lord is righteous in all his ways and kind in all his works.", "refTag": "Psalm 145:17" },
        "January 19": { "quote": "The Rock, his work is perfect, for all his ways are justice. A God of faithfulness and without iniquity, just and upright is he.", "refTag": "Deuteronomy 32:4" },
        "January 20": { "quote": "Justice, and only justice, you shall follow, that you may live and inherit the land that the Lord your God is giving you.", "refTag": "Deuteronomy 16:20" },
        "January 21": { "quote": ". . . learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead for the widow’s cause.", "refTag": "Isaiah 1:17" },
        "January 22": { "quote": "Everyone to whom much was given, of him much will be required, and from him to whom they entrusted much, they will demand the more.", "refTag": "Luke 12:48" },
        "January 23": { "quote": ". . . what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?", "refTag": "Micah 6:8" },
        "January 24": { "quote": "Judge not, that you be not judged. For with the judgment you pronounce you will be judged, and with the measure you use it will be measured to you.", "refTag": "Matthew 7:1-2" },
        "January 25": { "quote": "For the wrongdoer will be paid back for the wrong he has done, and there is no partiality.", "refTag": "Colossians 3:25" },
        "January 26": { "quote": "Seek good, and not evil, that you may live; and so the Lord, the God of hosts, will be with you, as you have said. Hate evil, and love good, and establish justice in the gate; it may be that the Lord, the God of hosts, will be gracious to the remnant of Joseph.", "refTag": "Amos 5:14-15" },
        "January 27": { "quote": "But let justice roll down like waters, and righteousness like an ever-flowing stream.", "refTag": "Amos 5:24" },
        "January 28": { "quote": "The Almighty – we cannot find him; he is great in power; justice and abundant righteousness he will not violate.", "refTag": "Job 37:23" },
        "January 29": { "quote": "Who has measured the waters in the hollow of his hand and marked off the heavens with a span, enclosed the dust of the earth in a measure and weighed the mountains in scales and the hills in a balance? Who has measured the Spirit of the Lord, or what man shows him his counsel? Whom did he consult, and who made him understand? Who taught him the path of justice, and taught him knowledge, and showed him the way of understanding?", "refTag": "Isaiah 40:12-14" },
        "January 30": { "quote": "Because you have kept my word about patient endurance, I will keep you from the hour of trial that is coming on the whole world, to try those who dwell on the earth.", "refTag": "Revelation 3:10" },
        "January 31": { "quote": "But love your enemies, and do good, and lend, expecting nothing in return, and your reward will be great, and you will be sons of the Most High, for he is kind to the ungrateful and the evil. Be merciful, even as your Father is merciful.", "refTag": "Luke 6:32-36" },
        "February 1": {
            "quote": "So whatever you wish that others would do to you, do also to them, for this is the Law and the Prophets.", "refTag": "Matthew 7:12",
            "quote2": "And as you wish that others would do to you, do so to them.", "refTag2": "Luke 6:31"
        },
        "February 2": {
            "quote": "A man who is kind benefits himself, but a cruel man hurts himself.", "refTag": "Proverbs 11:17",
            "quote2": "Do not say, “I will do to him as he has done to me; I will pay the man back for what he has done.”", "refTag2": "Proverbs 24:29"
        },
        "February 3": { "quote": "If you really fulfill the royal law according to the Scripture, “You shall love your neighbor as yourself,” you are doing well. But if you show partiality, you are committing sin. . .", "refTag": "James 2:8-9" },
        "February 4": { "quote": "Judge not, and you will not be judged; condemn not, and you will not be condemned; forgive, and you will be forgiven; give, and it will be given to you. Good measure, pressed down, shaken together, running over, will be put into your lap. For with the measure you use it will be measured back to you.", "refTag": "Luke 6:37-38" },
        "February 5": { "quote": "Why do you see the speck that is in your brother’s eye, but do not notice the log that is in your own eye?", "refTag": "Luke 6:39-42" },
        "February 6": { "quote": "The commandments, “You shall not commit adultery, You shall not murder, You shall not steal, You shall not covet,” and any other commandment, are summed up in this word: “You shall love your neighbor as yourself.” Love does no wrong to a neighbor; therefore love is the fulfilling of the law.", "refTag": "Romans 13:9-10" },
        "February 7": { "quote": "Why do you pass judgment on your brother? Or you, why do you despise your brother? For we will all stand before the judgment seat of God; for it is written, “As I live, says the Lord, every knee shall bow to me, and every tongue shall confess to God.” So then each of us will give an account of himself to God.", "refTag": "Romans 14:10-12" },
        "February 8": { "quote": "Blessed are the peacemakers, for they shall be called sons of God.", "refTag": "Matthew 5:9" },
        "February 9": { "quote": "He who justifies the wicked and he who condemns the righteous are both alike an abomination to the Lord.", "refTag": "Proverbs 17:15" },
        "February 10": { "quote": "A greedy man stirs up strife, but the one who trusts in the Lord will be enriched.", "refTag": "Proverbs 28:25" },
        "February 11": { "quote": "Better is a little with the fear of the Lord than great treasure and trouble with it.", "refTag": "Proverbs 15:16" },
        "February 12": { "quote": "The Lord has heard my plea; the Lord accepts my prayer. All my enemies shall be ashamed and greatly troubled; they shall turn back and be put to shame in a moment.", "refTag": "Psalm 6:9-10" },
        "February 13": { "quote": "O Lord my God, in you do I take refuge; save me from all my pursuers and deliver me, lest like a lion they tear my soul apart, rending it in pieces, with none to deliver.", "refTag": "Psalm 7:1-2" },
        "February 14": { "quote": "Owe no one anything, except to love each other, for the one who loves another has fulfilled the law.", "refTag": "Romans 13:8" },
        "February 15": { "quote": "Be gracious to me, O God, for man tramples on me; all day long an attacker oppresses me; my enemies trample on me all day long, for many attack me proudly. When I am afraid, I put my trust in you. In God, whose word I praise, in God I trust; I shall not be afraid. What can flesh do to me?", "refTag": "Psalm 56:1-4" },
        "February 16": { "quote": "I can do all things through him who strengthens me.", "refTag": "Philippians 4:13" },
        "February 17": { "quote": "Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.", "refTag": "James 1:12" },
        "February 18": { "quote": "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.", "refTag": "John 16:33" },
        "February 19": { "quote": "“Why are you afraid, O you of little faith?” Then he rose and rebuked the winds and the sea, and there was a great calm. And the men marveled, saying, “What sort of man is this, that even winds and sea obey him?”", "refTag": "Matthew 8:26-27" },
        "February 20": { "quote": "Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxieties on him, because he cares for you.", "refTag": "1 Peter 5:6-7" },
        "February 21": { "quote": "When the righteous increase, the people rejoice, but when the wicked rule, the people groan.", "refTag": "Proverbs 29:2" },
        "February 22": { "quote": "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", "refTag": "Romans 8:28" },
        "February 23": { "quote": "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ. Through him we have also obtained access by faith into this grace in which we stand, and we rejoice in hope of the glory of God. More than that, we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God's love has been poured into our hearts through the Holy Spirit who has been given to us.", "refTag": "Romans 5:1-5" },
        "February 24": { "quote": "And above all these put on love, which binds everything together in perfect harmony.", "refTag": "Colossians 3:14" },
        "February 25": { "quote": "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.", "refTag": "Joshua 1:9" },
        "February 26": { "quote": "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.", "refTag": "Corinthians 15:58" },
        "February 27": { "quote": "Beloved, do not be surprised at the fiery trial when it comes upon you to test you, as though something strange were happening to you. But rejoice insofar as you share Christ’s sufferings, that you may also rejoice and be glad when his glory is revealed.", "refTag": "1 Peter 4:12-13" },
        "February 28": { "quote": "If one gives an answer before he hears, it is his folly and shame.", "refTag": "Proverbs 18:13" },
        "February 29": {
            "quote": "For you are my lamp, O LORD,  and my God lightens my darkness. For by you I can run against a troop,  and by my God I can leap over a wall.", "refTag": "2 Samuel 22:29-30",
            "quote2": "And leaping up, he stood and began to walk, and entered the temple with them, walking and leaping and praising God.", "refTag2": "Acts 3:8"
        },
        "March 1": { "quote": "The one who states his case first seems right, until the other comes and examines him.", "refTag": "Proverbs 18:17" },
        "March 2": { "quote": "A worthless witness mocks at justice, and the mouth of the wicked devours iniquity.", "refTag": "Proverbs 19:28" },
        "March 3": { "quote": "A word fitly spoken is like apples of gold in a setting of silver. Like a gold ring or an ornament of gold is a wise reprover to a listening ear.", "refTag": "Proverbs 25:11-12" },
        "March 4": { "quote": "With patience a ruler may be persuaded, and a soft tongue will break a bone.", "refTag": "Proverbs 25:15" },
        "March 5": { "quote": "Do not rejoice when your enemy falls, and let not your heart be glad when he stumbles, lest the Lord see it and be displeased, and turn away his anger from him.", "refTag": "Proverbs 24:17-18" },
        "March 6": { "quote": "A wise man is full of strength, and a man of knowledge enhances his might, for by wise guidance you can wage your war, and in abundance of counselors there is victory.", "refTag": "Proverbs 24:5-6" },
        "March 7": { "quote": "Have nothing to do with foolish, ignorant controversies; you know that they breed quarrels.", "refTag": "2 Timothy 2:23" },
        "March 8": { "quote": "May the Lord cut off all flattering lips, the tongue that makes great boasts, those who say, “With our tongue we will prevail, our lips are with us; who is master over us?”", "refTag": "Psalm 12:3-4" },
        "March 9": { "quote": "What your eyes have seen do not hastily bring into court, for what will you do in the end, when your neighbor puts you to shame? Argue your case with your neighbor himself, and do not reveal another's secret, lest he who hears you bring shame upon you, and your ill repute have no end.", "refTag": "Proverbs 25:7-10" },
        "March 10": { "quote": "Nothing is covered up that will not be revealed, or hidden that will not be known. Therefore whatever you have said in the dark shall be heard in the light, and what you have whispered in private rooms shall be proclaimed on the housetops.", "refTag": "Luke 12:2-3" },
        "March 11": { "quote": "Now who is there to harm you if you are zealous for what is good? But even if you should suffer for righteousness’ sake, you will be blessed. Have no fear of them, nor be troubled, but in your hearts regard Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect, having a good conscience, so that, when you are slandered, those who revile your good behavior in Christ may be put to shame. For it is better to suffer for doing good, if that should be God’s will, than for doing evil.", "refTag": "1 Peter 3:13-17" },
        "March 12": { "quote": "And let us not grow weary of doing good, for in due season we will reap, if we do not give up.", "refTag": "Galatians 6:9" },
        "March 13": { "quote": "Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.", "refTag": "Colossians 3:23-24" },
        "March 14": { "quote": "Whoever is slack in his work is a brother to him who destroys.", "refTag": "Proverbs 18:9" },
        "March 15": { "quote": "The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.", "refTag": "Proverbs 21:5" },
        "March 16": { "quote": "The hand of the diligent will rule, while the slothful will be put to forced labor. Whoever is slothful will not roast his game, but the diligent man will get precious wealth.", "refTag": "Proverbs 12:24 & 27" },
        "March 17": { "quote": "A little sleep, a little slumber, a little folding of the hands to rest, and poverty will come upon you like a robber, and want like an armed man.", "refTag": "Proverbs 24:33-34" },
        "March 18": { "quote": "The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied.", "refTag": "Proverbs 13:4" },
        "March 19": { "quote": "When words are many, transgression is not lacking, but whoever restrains his lips is prudent.", "refTag": "Proverbs 10:19" },
        "March 20": { "quote": "And he told them a parable to the effect that they ought always to pray and not lose heart. He said, “In a certain city there was a judge who neither feared God nor respected man. And there was a widow in that city who kept coming to him and saying, ‘Give me justice against my adversary.’ For a while he refused, but afterward he said to himself, ‘Though I neither fear God nor respect man, yet because this widow keeps bothering me, I will give her justice, so that she will not beat me down by her continual coming.’” And the Lord said, “Hear what the unrighteous judge says. And will not God give justice to his elect, who cry to him day and night? Will he delay long over them? I tell you, he will give justice to them speedily. Nevertheless, when the Son of Man comes, will he find faith on earth?”", "refTag": "Luke 18:1-8" },
        "March 21": { "quote": "Even a fool who keeps silent is considered wise; when he closes his lips, he is deemed intelligent.", "refTag": "Proverbs 17:28" },
        "March 22": { "quote": "Whoever keeps his mouth and his tongue keeps himself out of trouble.", "refTag": "Proverbs 21:23" },
        "March 23": { "quote": "Do you see a man who is hasty in his words? There is more hope for a fool than for him.", "refTag": "Proverbs 29:20" },
        "March 24": { "quote": "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness that God requires.", "refTag": "James 1: 19-20" },
        "March 25": { "quote": "The hearing ear and the seeing eye, the Lord has made them both.", "refTag": "Proverbs 20:12" },
        "March 26": { "quote": "Cursed be anyone who perverts the justice due to the sojourner, the fatherless, and the widow.", "refTag": "Deuteronomy 27:19" },
        "March 27": {
            "quote": "Without counsel plans fail, but with many advisers they succeed.", "refTag": "Proverbs 15:22",
            "quote2": "Plans are established by counsel; by wise guidance wage war.", "refTag2": "Proverbs 20:18"
        },
        "March 28": { "quote": "Where there is no guidance, a people falls, but in an abundance of counselors there is safety.", "refTag": "Proverbs 11:14" },
        "March 29": { "quote": "How you have helped him who has no power! How you have saved the arm that has no strength! How you have counseled him who has no wisdom, and plentifully declared sound knowledge! With whose help have you uttered words, and whose breath has come out from you?", "refTag": "Job 26:2-4" },
        "March 30": { "quote": "But if anyone has the world’s goods and sees his brother in need, yet closes his heart against him, how does God’s love abide in him? Little children, let us not love in word or talk but in deed and in truth.", "refTag": "1 John 3:17-18" },
        "March 31": { "quote": "You shall not pervert the justice due to your poor in his lawsuit.", "refTag": "Exodus 23:6" },
        "April 1": { "quote": "A prudent man conceals knowledge, but the heart of fools proclaims folly.", "refTag": "Proverbs 12:23" },
        "April 2": { "quote": "What good is it, my brothers, if someone says he has faith but does not have works? Can that faith save him? If a brother or sister is poorly clothed and lacking in daily food, and one of you says to them, “Go in peace, be warmed and filled,” without giving them the things needed for the body, what good is that? So also faith by itself, if it does not have works, is dead.", "refTag": "James 2:14-17" },
        "April 3": { "quote": "Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute. Rescue the weak and the needy; deliver them from the hand of the wicked.", "refTag": "Psalm 82:3-4" },
        "April 4": { "quote": "The rich and the poor meet together; the Lord is the maker of them all.", "refTag": "Proverbs 22:2" },
        "April 5": { "quote": "When the Son of Man comes in his glory, and all the angels with him, then he will sit on his glorious throne. Before him will be gathered all the nations, and he will separate people one from another as a shepherd separates the sheep from the goats.", "refTag": "Matthew 25:31-32" },
        "April 6": { "quote": "“‘. . .For I was hungry and you gave me food, I was thirsty and you gave me drink, I was a stranger and you welcomed me, I was naked and you clothed me, I was sick and you visited me, I was in prison and you came to me.’ Then the righteous will answer him, saying, ‘Lord, when did we see you hungry and feed you, or thirsty and give you drink? And when did we see you a stranger and welcome you, or naked and clothe you? And when did we see you sick or in prison and visit you?' And the King will answer them, ‘Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.’”", "refTag": "Matthew 25:33-40" },
        "April 7": { "quote": "“‘. . .For I was hungry and you gave me no food, I was thirsty and you gave me no drink, I was a stranger and you did not welcome me, naked and you did not clothe me, sick and in prison and you did not visit me.’ Then they also will answer, saying, ‘Lord, when did we see you hungry or thirsty or a stranger or naked or sick or in prison, and did not minister to you?’ Then he will answer them, saying, ‘Truly, I say to you, as you did not do it to one of the least of these, you did not do it to me.’ And these will go away into eternal punishment, but the righteous into eternal life.”", "refTag": "Matthew 25:41-46" },
        "April 8": { "quote": "Whoever has a bountiful eye will be blessed, for he shares his bread with the poor.", "refTag": "Proverbs 22:9" },
        "April 9": { "quote": "Whoever oppresses the poor to increase his own wealth, or gives to the rich, will only come to poverty.", "refTag": "Proverbs 22:16" },
        "April 10": { "quote": "Whoever is generous to the poor lends to the Lord, and he will repay him for his deed.", "refTag": "Proverbs 19:17" },
        "April 11": { "quote": "Whoever multiplies his wealth by interest and profit gathers it for him who is generous to the poor.", "refTag": "Proverbs 28:8" },
        "April 12": { "quote": "Whoever closes his ear to the cry of the poor will himself call out and not be answered.", "refTag": "Proverbs 21:13" },
        "April 13": { "quote": "Whoever gives to the poor will not want, but he who hides his eyes will get many a curse.", "refTag": "Proverbs 28:27" },
        "April 14": { "quote": "A righteous man knows the rights of the poor; a wicked man does not understand such knowledge.", "refTag": "Proverbs 29:7" },
        "April 15": { "quote": "[Testing Jesus, the Pharisees asked] Is it lawful to pay taxes to Caesar, or not?” But Jesus aware of their malice, said, “Why put me to the test you hypocrites? Show me the coin for the tax.” [And they brought him a coin with Caesar’s likeness and inscription on it]. And Jesus said to them, “Therefore render to Caesar the things that are Caesar's, and to God the things that are God's.”", "refTag": "Matthew 22:15-21" },
        "April 16": { "quote": "The poor man and the oppressor meet together; the Lord gives light to the eyes of both.", "refTag": "Proverbs 29:13" },
        "April 17": { "quote": "Whoever mocks the poor insults his Maker; he who is glad at calamity will not go unpunished.", "refTag": "Proverbs 17:5" },
        "April 18": { "quote": "In arrogance the wicked hotly pursue the poor; let them be caught in the schemes that they have devised.", "refTag": "Psalm 10:2" },
        "April 19": { "quote": "Blessed is the one who considers the poor! In the day of trouble the Lord delivers him; the Lord protects him and keeps him alive; he is called blessed in the land. . .", "refTag": "Psalm 41:1-2" },
        "April 20": { "quote": "We who are strong have an obligation to bear with the failings of the weak, and not to please ourselves.", "refTag": "Romans 15:1" },
        "April 21": { "quote": "Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body.", "refTag": "Hebrews 13:3" },
        "April 22": {
            "quote": "Pride goes before destruction, and a haughty spirit before a fall.", "refTag": "Proverbs 16:18",
            "quote2": "Before destruction a man’s heart is haughty, but humility comes before honor.", "refTag2": "Proverbs 18:12"
        },
        "April 23": { "quote": "Let no one deceive himself. If anyone among you thinks that he is wise in this age, let him become a fool that he may become wise. For the wisdom of this world is folly with God. For it is written, “He catches the wise in their craftiness,” and again, “The Lord knows the thoughts of the wise, that they are futile.” So let no one boast in men.", "refTag": "1 Corinthians 3:18-21" },
        "April 24": { "quote": "Haughty eyes and a proud heart, the lamp of the wicked, are sin.", "refTag": "Proverbs 21:4" },
        "April 25": { "quote": "The fear of the Lord is instruction in wisdom, and humility comes before honor.", "refTag": "Proverbs 15:33" },
        "April 26": { "quote": "Everyone who is arrogant in heart is an abomination to the Lord; be assured, he will not go unpunished.", "refTag": "Proverbs 16:5" },
        "April 27": { "quote": "The reward for humility and fear of the Lord is riches and honor and life.", "refTag": "Proverbs 22:4" },
        "April 28": { "quote": "Do not boast about tomorrow, for you do not know what a day may bring. Let another praise you, and not your own mouth; a stranger, and not your own lips.", "refTag": "Proverbs 27:1-2" },
        "April 29": { "quote": "Clothe yourselves, all of you, with humility toward one another, for “God opposes the proud but gives grace to the humble.” Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you. . .", "refTag": "1 Peter 5:5-6" },
        "April 30": { "quote": "Do not put yourself forward in the king’s presence or stand in the place of the great, for it is better to be told, “Come up here,” than to be put lower in the presence of a noble.", "refTag": "Proverbs 25:6-7" },
        "May 1": { "quote": "Do nothing from rivalry or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others. Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but made himself nothing, taking the form of a servant, being born in the likeness of men.", "refTag": "Philippians 2:3-7" },
        "May 2": { "quote": "And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross. Therefore God has highly exalted him and bestowed on him the name that is above every name, so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.", "refTag": "Philippians 2:8-11" },
        "May 3": { "quote": ". . . whoever would be great among you must be your servant and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.", "refTag": "Mark 10:43-45" },
        "May 4": { "quote": "Do you see a man who is wise in his own eyes? There is more hope for a fool than for him.", "refTag": "Proverbs 26:12" },
        "May 5": { "quote": "One’s pride will bring him low, but he who is lowly in spirit will obtain honor.", "refTag": "Proverbs 29:23" },
        "May 6": { "quote": "Woe to those who are wise in their own eyes, and shrewd in their own sight!", "refTag": "Isaiah 5:21" },
        "May 7": { "quote": "“Let the one who boasts, boast in the Lord.” For it is not the one who commends himself who is approved, but the one whom the Lord commends.", "refTag": "2 Corinthians 10:17-18" },
        "May 8": { "quote": "The greatest among you shall be your servant. Whoever exalts himself will be humbled, and whoever humbles himself will be exalted.", "refTag": "Matthew 23:11-12" },
        "May 9": { "quote": "If anyone would be first, he must be last of all and servant of all.", "refTag": "Mark 9:35" },
        "May 10": { "quote": "And let us not grow weary of doing good, for in due season we will reap, if we do not give up. So then, as we have opportunity, let us do good to everyone, and especially to those who are of the household of faith.", "refTag": "Galatians 6:9-10" },
        "May 11": { "quote": "At that time the disciples came to Jesus, saying, “Who is the greatest in the kingdom of heaven?” And calling to him a child, he put him in the midst of them and said, “Truly, I say to you, unless you turn and become like children, you will never enter the kingdom of heaven. Whoever humbles himself like this child is the greatest in the kingdom of heaven.", "refTag": "Matthew 18:1-4" },
        "May 12": { "quote": "O Lord, make me know my end and what is the measure of my days; let me know how fleeting I am! Behold, you have made my days a few handbreadths, and my lifetime is as nothing before you. Surely all mankind stands as a mere breath!", "refTag": "Psalm 39:4-5" },
        "May 13": { "quote": "Thus, when you give to the needy, sound no trumpet before you, as the hypocrites do in the synagogues and in the streets, that they may be praised by others. Truly, I say to you, they have received their reward. But when you give to the needy, do not let your left hand know what your right hand is doing, so that your giving may be in secret. And your Father who sees in secret will reward you.", "refTag": "Matthew 6:2-4" },
        "May 14": { "quote": "Blessed are the merciful, for they shall receive mercy.", "refTag": "Matthew 5:7" },
        "May 15": { "quote": "And when you reap the harvest of your land, you shall not reap your field right up to its edge, nor shall you gather the gleanings after your harvest. You shall leave them for the poor and for the sojourner: I am the Lord your God.", "refTag": "Leviticus 23:22" },
        "May 16": { "quote": "Do not say to your neighbor, “Go, and come again, tomorrow I will give it”--when you have it with you.", "refTag": "Proverbs 3:28" },
        "May 17": { "quote": "For the whole law is fulfilled in one word: “You shall love your neighbor as yourself.”", "refTag": "Galatians 5:14" },
        "May 18": { "quote": "As each has received a gift, use it to serve one another, as good stewards of God’s varied grace. . .", "refTag": "1 Peter 4:10" },
        "May 19": { "quote": "And we urge you, brothers, admonish the idle, encourage the fainthearted, help the weak, be patient with them all", "refTag": "1 Thessalonians 5:14" },
        "May 20": { "quote": "You shall not pervert the justice due to the sojourner or to the fatherless, or take a widow’s garment in pledge. . .", "refTag": "Deuteronomy 24:17" },
        "May 21": { "quote": "Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.", "refTag": "Proverbs 31:8-9" },
        "May 22": { "quote": "For even when we were with you, we would give you this command: If anyone is not willing to work, let him not eat. For we hear that some among you walk in idleness, not busy at work, but busybodies. Now such persons we command and encourage in the Lord Jesus Christ to do their work quietly and to earn their own living.", "refTag": "2 Thessalonians 3:10-12" },
        "May 23": { "quote": "Thus says the Lord: Do justice and righteousness, and deliver from the hand of the oppressor him who has been robbed. And do no wrong or violence to the resident alien, the fatherless, and the widow, nor shed innocent blood in this place.", "refTag": "Jeremiah 22:3" },
        "May 24": { "quote": "Put away from you crooked speech, and put devious talk far from you.", "refTag": "Proverbs 4:24" },
        "May 25": { "quote": "A truthful witness saves lives, but one who breathes out lies is deceitful.", "refTag": "Proverbs 14:25" },
        "May 26": { "quote": "These are the things that you shall do: Speak the truth to one another; render in your gates judgments that are true and make for peace; do not devise evil in your hearts against one another, and love no false oath, for all these things I hate, declares the Lord.", "refTag": "Zechariah 8:16-17" },
        "May 27": { "quote": "I will not violate my covenant or alter the word that went forth from my lips.", "refTag": "Psalm 89:34" },
        "May 28": { "quote": "Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth.", "refTag": "2 Timothy 2:15" },
        "May 29": { "quote": "You shall not spread a false report. You shall not join hands with a wicked man to be a malicious witness. You shall not fall in with the many to do evil, nor shall you bear witness in a lawsuit, siding with the many, so as to pervert justice, nor shall you be partial to a poor man in his lawsuit.", "refTag": "Exodus 23:1-3" },
        "May 30": { "quote": "Keep far from a false charge, and do not kill the innocent and righteous, for I will not acquit the wicked.", "refTag": "Exodus 23:7" },
        "May 31": { "quote": "Be not a witness against your neighbor without cause, and do not deceive with your lips.", "refTag": "Proverbs 24:28" },
        "June 1": {
            "quote": "Whoever walks in integrity will be delivered, but he who is crooked in his ways will suddenly fall.", "refTag": "Proverbs 28:18",
            "quote2": "Whoever walks in integrity walks securely, but he who makes his ways crooked will be found out.", "refTag2": "Proverbs 10:9"
        },
        "June 2": {
            "quote": "Better is a poor man who walks in his integrity than a rich man who is crooked in his ways.", "refTag": "Proverbs 28:6",
            "quote2": "Better is a poor person who walks in his integrity than one who is crooked in speech and is a fool.", "refTag2": "Proverbs 19:1"
        },
        "June 3": { "quote": "The righteous who walks in his integrity--blessed are his children after him!", "refTag": "Proverbs 20:7" },
        "June 4": { "quote": "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.", "refTag": "1 Corinthians 10:13" },
        "June 5": { "quote": "[A]s long as my breath is in me, and the spirit of God is in my nostrils, my lips will not speak falsehood, and my tongue will not utter deceit. . . till I die I will not put away my integrity from me. I hold fast my righteousness and will not let it go; my heart does not reproach me for any of my days.", "refTag": "Job 27:3-6" },
        "June 6": { "quote": "May integrity and uprightness preserve me, for I wait for you.", "refTag": "Psalm 25:21" },
        "June 7": { "quote": "The Lord judges the peoples; judge me, O Lord, according to my righteousness and according to the integrity that is in me.", "refTag": "Psalm 7:8" },
        "June 8": { "quote": "[M]ake every effort to supplement your faith with virtue, and virtue with knowledge, and knowledge with self-control, and self-control with steadfastness, and steadfastness with godliness, and godliness with brotherly affection, and brotherly affection with love. For if these qualities are yours and are increasing, they keep you from being ineffective or unfruitful in the knowledge of our Lord Jesus Christ.", "refTag": "2 Peter 1:5-8" },
        "June 9": { "quote": "The words of the Lord are pure words, like silver refined in a furnace on the ground, purified seven times.", "refTag": "Psalm 12:6" },
        "June 10": { "quote": "Treasures gained by wickedness do not profit, but righteousness delivers from death.", "refTag": "Proverbs 10:2" },
        "June 11": { "quote": "One gives freely, yet grows all the richer; another withholds what he should give, and only suffers want. Whoever brings blessing will be enriched, and one who waters will himself be watered. The people curse him who holds back grain, but a blessing is on the head of him who sells it.", "refTag": "Proverbs 11:24-26" },
        "June 12": { "quote": "Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.", "refTag": "Proverbs 28:13" },
        "June 13": { "quote": "A faithful man will abound with blessings, but whoever hastens to be rich will not go unpunished.", "refTag": "Proverbs 28:20" },
        "June 14": { "quote": "Therefore do not be anxious, saying, ‘What shall we eat?’ or ‘What shall we drink?’ or ‘What shall we wear?’ For the Gentiles seek after all these things, and your heavenly father knows that you need them all. But seek first the kingdom of God and his righteousness, and all these things will be added to you.", "refTag": "Matthew 6:31-33" },
        "June 15": { "quote": "So [Elijah] arose and went to Zarephath. And when he came to the gate of the city, behold, a widow was there gathering sticks. And he called to her and said, “Bring me a little water in a vessel, that I may drink.” And as she was going to bring it, he called to her and said, “Bring me a morsel of bread in your hand.” And she said, “As the Lord your God lives, I have nothing baked, only a handful of flour in a jar and a little oil in a jug. And now I am gathering a couple of sticks that I may go in and prepare it for myself and my son, that we may eat it and die.” And Elijah said to her, “Do not fear; go and do as you have said. But first make me a little cake of it and bring it to me, and afterward make something for yourself and your son. For thus says the Lord the God of Israel, ‘The jar of flour shall not be spent, and the jug of oil shall not be empty, until the day that the Lord sends rain upon the earth.’” And she went and did as Elijah said. And she and he and her household ate for many days. The jar of flour was not spent, neither did the jug of oil become empty, according to the word of the Lord that he spoke by Elijah.", "refTag": "1 Kings 17:10-16" },
        "June 16": { "quote": "Now the wife of one of the sons of the prophets cried to Elisha, “Your servant my husband is dead, and you know that your servant feared the Lord, but the creditor has come to take my two children to be his slaves.” And Elisha said to her, “What shall I do for you? Tell me; what have you in the house?” And she said, “Your servant has nothing in the house except a jar of oil.” Then he said, “Go outside, borrow vessels from all your neighbors, empty vessels and not too few. Then go in and shut the door behind yourself and your sons and pour into all these vessels. And when one is full, set it aside.” So she went from him and shut the door behind herself and her sons. And as she poured they brought the vessels to her. When the vessels were full, she said to her son, “Bring me another vessel.” And he said to her, “There is not another.” Then the oil stopped flowing. She came and told the man of God, and he said, “Go, sell the oil and pay your debts, and you and your sons can live on the rest.”", "refTag": "2 Kings 4:1-7" },
        "June 17": { "quote": "Honor the Lord with your wealth and with the first fruits of all your produce; then your barns will be filled with plenty, and your vats will be bursting with wine.", "refTag": "Proverbs 3:9-10" },
        "June 18": { "quote": "And he sat down opposite the treasury and watched the people putting money into the offering box. Many rich people put in large sums. And a poor widow came and put in two small copper coins, which make a penny. And he called his disciples to him and said to them, “Truly, I say to you, this poor widow has put in more than all those who are contributing to the offering box. For they all contributed out of their abundance, but she out of her poverty has put in everything she had, all she had to live on.”", "refTag": "Mark 12:41-44" },
        "June 19": { "quote": "He who loves money will not be satisfied with money, nor he who loves wealth with his income; this also is vanity.", "refTag": "Ecclesiastes 5:10" },
        "June 20": { "quote": "If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God. Set your minds on things that are above, not on things that are on earth.", "refTag": "Colossians 3:1-2" },
        "June 21": { "quote": "Whoever trusts in his riches will fall, but the righteous will flourish like a green leaf.", "refTag": "Proverbs 11:28" },
        "June 22": { "quote": "Wealth gained hastily will dwindle, but whoever gathers little by little will increase it.", "refTag": "Proverbs 13:11" },
        "June 23": { "quote": "Whoever despises the word brings destruction on himself, but he who reveres the commandment will be rewarded.", "refTag": "Proverbs 13:13" },
        "June 24": { "quote": "Disaster pursues sinners, but the righteous are rewarded with good.", "refTag": "Proverbs 13:21" },
        "June 25": { "quote": "Whoever gives thought to the word will discover good, and blessed is he who trusts in the Lord.", "refTag": "Proverbs 16:20" },
        "June 26": { "quote": "Know well the condition of your flocks, and give attention to your herds, for riches do not last forever; and does a crown endure to all generations?", "refTag": "Proverbs 27:23-24" },
        "June 27": { "quote": "And when it grew late, his disciples came to him and said, “This is a desolate place, and the hour is now late. Send them away to go into the surrounding countryside and villages and buy themselves something to eat.” But he answered them, “You give them something to eat.” And they said to him, “Shall we go and buy two hundred denarii worth of bread and give it to them to eat?” And he said to them, “How many loaves do you have? Go and see.” And when they had found out, they said, “Five, and two fish.” Then he commanded them all to sit down in groups on the green grass. So they sat down in groups, by hundreds and by fifties. And taking the five loaves and the two fish he looked up to heaven and said a blessing and broke the loaves and gave them to the disciples to set before the people. And he divided the two fish among them all. And they all ate and were satisfied. And they took up twelve baskets full of broken pieces and of the fish. And those who ate the loaves were five thousand men.", "refTag": "Mark 6:35-44" },
        "June 28": { "quote": "He provides food for those who fear him; he remembers his covenant forever.", "refTag": "Psalm 111:5" },
        "June 29": { "quote": "In those days, when again a great crowd had gathered, and they had nothing to eat, he called his disciples to him and said to them, “I have compassion on the crowd, because they have been with me now three days and have nothing to eat. And if I send them away hungry to their homes, they will faint on the way. And some of them have come from far away.” And his disciples answered him, “How can one feed these people with bread here in this desolate place?” And he asked them, “How many loaves do you have?” They said, “Seven.” And he directed the crowd to sit down on the ground. And he took the seven loaves, and having given thanks, he broke them and gave them to his disciples to set before the people; and they set them before the crowd. And they had a few small fish. And having blessed them, he said that these also should be set before them. And they ate and were satisfied. And they took up the broken pieces left over, seven baskets full. And there were about four thousand people. And he sent them away.", "refTag": "Mark 8:1-9" },
        "June 30": { "quote": "If anyone thirsts, let him come to me and drink. Whoever believes in me, as the Scripture has said, ‘Out of his heart will flow rivers of living water.’", "refTag": "John 2:37-38" },
        "July 1": { "quote": "Do not be deceived, my beloved brothers. Every good gift and every perfect gift is from above, coming down from the Father of lights with whom there is no variation or shadow due to change.", "refTag": "James 1:16-17" },
        "July 2": { "quote": "“One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much. If then you have not been faithful in the unrighteous wealth, who will entrust to you the true riches? And if you have not been faithful in that which is another’s, who will give you that which is your own? No servant can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money.”", "refTag": "Luke 16:10-13" },
        "July 3": { "quote": "‘I tell you that to everyone who has, more will be given, but from the one who has not, even what he has will be taken away.’", "refTag": "Luke 19:26" },
        "July 4": { "quote": "For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery.", "refTag": "Galatians 5:1" },
        "July 5": { "quote": "Buy truth, and do not sell it; buy wisdom, instruction, and understanding.", "refTag": "Proverbs 23:23" },
        "July 6": { "quote": "All the toil of man is for his mouth, yet his appetite is not satisfied. For what advantage has the wise man over the fool? And what does the poor man have who knows how to conduct himself before the living? Better is the sight of the eyes than the wandering of the appetite: this also is vanity and a striving after wind.", "refTag": "Ecclesiastes 6:7-9" },
        "July 7": { "quote": "Precious treasure and oil are in a wise man’s dwelling, but a foolish man devours it.", "refTag": "Proverbs 21:20" },
        "July 8": { "quote": "Whoever loves pleasure will be a poor man; he who loves wine and oil will not be rich.", "refTag": "Proverbs 21:17" },
        "July 9": { "quote": "As I have seen, those who plow iniquity and sow trouble reap the same.", "refTag": "Job 4:8" },
        "July 10": { "quote": "Let the lowly brother boast in his exaltation, and the rich in his humiliation, because like a flower of the grass he will pass away. For the sun rises with its scorching heat and withers the grass; its flower falls, and its beauty perishes. So also will the rich man fade away in the midst of his pursuits.", "refTag": "James 1:9-11" },
        "July 11": { "quote": "Come now, you rich, weep and howl for the miseries that are coming upon you. Your riches have rotted and your garments are moth-eaten. Your gold and silver have corroded, and their corrosion will be evidence against you and will eat your flesh like fire. You have laid up treasure in the last days. Behold, the wages of the laborers who mowed your fields, which you kept back by fraud, are crying out against you, and the cries of the harvesters have reached the ears of the Lord of hosts. You have lived on the earth in luxury and in self-indulgence. You have fattened your hearts in a day of slaughter. You have condemned; you have murdered the righteous person. He does not resist you.", "refTag": "James 5:1-6" },
        "July 12": { "quote": "But many who are first will be last, and the last first.", "refTag": "Mark 10:31" },
        "July 13": { "quote": "Bring the full tithes into the storehouse, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need.", "refTag": "Malachi 3:10" },
        "July 14": { "quote": "For when dreams increase and words grow many, there is vanity; but God is the one you must fear.", "refTag": "Ecclesiastes 5:7" },
        "July 15": { "quote": "Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven, where neither moth nor rust destroys and where thieves do not break in and steal. For where your treasure is, there your heart will be also.", "refTag": "Matthew 6:19-21" },
        "July 16": { "quote": "No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money.", "refTag": "Matthew 6:24" },
        "July 17": { "quote": "Pay attention to what you hear: with the measure you use, it will be measured to you, and still more will be added to you.", "refTag": "Mark 4:24" },
        "July 18": { "quote": "For what does it profit a man to gain the whole world and forfeit his life?", "refTag": "Mark 8:36" },
        "July 19": { "quote": "O you of little faith! And do not seek what you are to eat and what you are to drink, nor be worried. For all the nations of the world seek after these things, and your Father knows that you need them. Instead, seek his kingdom, and these things will be added to you.", "refTag": "Luke 12:15-31" },
        "July 20": { "quote": "Jesus looked up and saw the rich putting their gifts into the offering box, and he saw a poor widow put in two small copper coins. And he said, “Truly, I tell you, this poor widow has put in more than all of them. For they all contributed out of their abundance, but she out of her poverty put in all she had to live on.”", "refTag": "Luke 21:1-4" },
        "July 21": { "quote": "And my God will supply every need of yours according to his riches in glory in Christ Jesus.", "refTag": "Philippians 4:19" },
        "July 22": { "quote": "The point is this: whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully. Each one must give as he has made up his mind, not reluctantly or under compulsion, for God loves a cheerful giver. And God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work. As it is written, “He has distributed freely, he has given to the poor; his righteousness endures forever.”", "refTag": "2 Corinthians 9:6-9" },
        "July 23": { "quote": "As for the rich in this present age, charge them not to be haughty, nor to set their hopes on the uncertainty of riches, but on God, who richly provides us with everything to enjoy. They are to do good, to be rich in good works, to be generous and ready to share, thus storing up treasure for themselves as a good foundation for the future, so that they may take hold of that which is truly life.", "refTag": "1 Timothy 6:17-19" },
        "July 24": {
            "quote": "Jesus [said to his disciples], “How difficult it will be for those who have wealth to enter the kingdom of God. . . It is easier for a camel to go through the eye of a needle than for a rich person to enter the kingdom of God.”  And they were exceedingly astonished, and said to him, “Then who can be saved?” Jesus looked at them and said, “With man it is impossible, but not with God. For all things are possible with God.”", "refTag": "Mark 10:23-27",
            "quote2": "What is impossible with men is possible with God.", "refTag2": "Luke 18:27"
        },
        "July 25": { "quote": "Now there is great gain in godliness with contentment, for we brought nothing into the world, and we cannot take anything out of the world. But if we have food and clothing, with these we will be content. But those who desire to be rich fall into temptation, into a snare, into many senseless and harmful desires that plunge people into ruin and destruction. For the love of money is a root of all kinds of evils. It is through this craving that some have wandered away from the faith and pierced themselves with many pangs. But as for you, O man of God, flee these things. Pursue righteousness, godliness, faith, love, steadfastness, gentleness. Fight the good fight of the faith. Take hold of the eternal life to which you were called and about which you made the good confession in the presence of many witnesses.", "refTag": "1 Timothy 6:6-12" },
        "July 26": { "quote": "Keep your life free from love of money, and be content with what you have, for he has said, “I will never leave you nor forsake you.” So we can confidently say, “The Lord is my helper; I will not fear; what can man do to me?”", "refTag": "Hebrews 13:5-6" },
        "July 27": { "quote": "He is the Lord our God; his judgments are in all the earth. He remembers his covenant forever, the word that he commanded, for a thousand generations, the covenant that he made with Abraham, his sworn promise to Isaac, which he confirmed to Jacob as a statute, to Israel as an everlasting covenant, saying, “To you I will give the land of Canaan as your portion for an inheritance.”", "refTag": "Psalm 105:7-11" },
        "July 28": { "quote": "This God—his way is perfect; the word of the Lord proves true; he is a shield for all those who take refuge in him.", "refTag": "Psalm 18:30" },
        "July 29": { "quote": "This is my comfort in my affliction, that your promise gives me life.", "refTag": "Psalm 119:50" },
        "July 30": { "quote": "It is good for me that I was afflicted, that I might learn your statutes.", "refTag": "Psalm 119:71" },
        "July 31": { "quote": "No wisdom, no understanding, no counsel can avail against the Lord.", "refTag": "Proverbs 21:30" },
        "August 1": { "quote": "Our God is a God of salvation, and to God, the Lord, belong deliverances from death.", "refTag": "Psalm 68:20" },
        "August 2": { "quote": "The name of the Lord is a strong tower; the righteous man runs into it and is safe.", "refTag": "Proverbs 18:10" },
        "August 3": { "quote": "He redeems my soul in safety from the battle that I wage, for many are arrayed against me.", "refTag": "Psalm 55:18" },
        "August 4": { "quote": "In you, O Lord, do I take refuge; let me never be put to shame! In your righteousness deliver me and rescue me; incline your ear to me, and save me! Be to me a rock of refuge, to which I may continually come; you have given the command to save me, for you are my rock and my fortress.", "refTag": "Psalm 71:1-3" },
        "August 5": { "quote": "For you, O Lord, have made me glad by your work; at the works of your hands I sing for joy.", "refTag": "Psalm 92:4" },
        "August 6": { "quote": "From the rising of the sun to its setting, the name of the Lord is to be praised! The Lord is high above all nations, and his glory above the heavens!", "refTag": "Psalm 113:3-4" },
        "August 7": { "quote": "There is none like you among the gods, O Lord, nor are there any works like yours. All the nations you have made shall come and worship before you, O Lord, and shall glorify your name. For you are great and do wondrous things; you alone are God. Teach me your way, O Lord, that I may walk in your truth; unite my heart to fear your name. I give thanks to you, O Lord my God, with my whole heart, and I will glorify your name forever.", "refTag": "Psalm 86:8-12" },
        "August 8": { "quote": "Great is our Lord, and abundant in power; his understanding is beyond measure.", "refTag": "Psalm 147:5" },
        "August 9": { "quote": "For whoever is ashamed of me and of my words, of him will the Son of Man be ashamed when he comes in his glory and the glory of the Father and of the holy angels.", "refTag": "Luke 9:26" },
        "August 10": { "quote": ". . . so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.", "refTag": "Philippians 2:10-11" },
        "August 11": { "quote": ". . . for it is written, “As I live, says the Lord, every knee shall bow to me, and every tongue shall confess to God.” So then each of us will give an account of himself to God.", "refTag": "Romans 14:11-12" },
        "August 12": { "quote": "By myself I have sworn; from my mouth has gone out in righteousness a word that shall not return: ‘To me every knee shall bow, every tongue shall swear allegiance.’", "refTag": "Isaiah 45:23" },
        "August 13": { "quote": "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.", "refTag": "Colossians 3:17" },
        "August 14": { "quote": ". . . to keep the commandment unstained and free from reproach until the appearing of our Lord Jesus Christ, which he will display at the proper time—he who is the blessed and only Sovereign, the King of kings and Lord of lords, who alone has immortality, who dwells in unapproachable light, whom no one has ever seen or can see. To him be honor and eternal dominion. Amen.", "refTag": "1 Timothy 6:14-16" },
        "August 15": { "quote": "Wait for the Lord; be strong, and let your heart take courage; wait for the Lord! He will lift me high upon a rock.", "refTag": "Psalm 27:14" },
        "August 16": { "quote": "God is our refuge and strength, a very present help in trouble.", "refTag": "Psalm 46:1-11" },
        "August 17": { "quote": "The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.", "refTag": "Psalm 28:7" },
        "August 18": { "quote": "The salvation of the righteous is from the Lord; he is their stronghold in the time of trouble. The Lord helps them and delivers them; he delivers them from the wicked and saves them, because they take refuge in him.", "refTag": "Psalm 37:39-40" },
        "August 19": { "quote": "The Lord is my strength and my song; he has become my salvation.", "refTag": "Psalm 118:14" },
        "August 20": { "quote": ". . . my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold and my refuge, my savior; you save me from violence.", "refTag": "2 Samuel 22:3" },
        "August 21": { "quote": "Trust in the Lord, and do good; dwell in the land and befriend faithfulness. Delight yourself in the Lord, and he will give you the desires of your heart. Commit your way to the Lord; trust in him, and he will act. He will bring forth your righteousness as the light, and your justice as the noonday.", "refTag": "Psalm 37:3-6" },
        "August 22": { "quote": "I love you, O Lord, my strength. The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold. I call upon the Lord, who is worthy to be praised, and I am saved from my enemies.", "refTag": "Psalm 18:1-3" },
        "August 23": { "quote": "For who is God, but the Lord? And who is a rock, except our God? – the God who equipped me with strength and made my way blameless.", "refTag": "Psalm 18:31-32" },
        "August 24": { "quote": "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name’s sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows. Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.", "refTag": "Psalm 23:1-6" },
        "August 25": { "quote": "The fear of man lays a snare, but whoever trusts in the Lord is safe.", "refTag": "Proverbs 29:25" },
        "August 26": { "quote": "The Lord is on my side; I will not fear. What can man do to me? The Lord is on my side as my helper; I shall look in triumph on those who hate me. It is better to take refuge in the Lord than to trust in man. It is better to take refuge in the Lord than to trust in princes.", "refTag": "Psalm 118:6-9" },
        "August 27": { "quote": "Every word of God proves true; he is a shield to those who take refuge in him.", "refTag": "Proverbs 30:5" },
        "August 28": { "quote": "Draw near to God, and he will draw near to you.", "refTag": "James 4:8" },
        "August 29": { "quote": "Therefore let those who suffer according to God’s will entrust their souls to a faithful Creator while doing good.", "refTag": "1 Peter 4:19" },
        "August 30": { "quote": "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness. “The Lord is my portion,” says my soul, “therefore I will hope in him.”", "refTag": "Lamentations 3:22-24" },
        "August 31": { "quote": "Behold, the eye of the Lord is on those who fear him. . .", "refTag": "Psalm 33:18-19" },
        "September 1": { "quote": "For I know that my Redeemer lives. . .", "refTag": "Job 19:25" },
        "September 2": { "quote": "You are a hiding place for me; you preserve me from trouble; you surround me with shouts of deliverance.", "refTag": "Psalm 32:7" },
        "September 3": { "quote": "Vindicate me, O God, and defend my cause against an ungodly people, from the deceitful and unjust man deliver me!", "refTag": "Psalm 43:1" },
        "September 4": { "quote": "No ill befalls the righteous, but the wicked are filled with trouble.", "refTag": "Proverbs 12:21" },
        "September 5": { "quote": "But we have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us. We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed; always carrying in the body the death of Jesus, so that the life of Jesus may also be manifested in our bodies.", "refTag": "2 Corinthians 4:7-10" },
        "September 6": {
            "quote": "But God, being rich in mercy, because of the great love with which he loved us, even when we were dead in our trespasses, made us alive together with Christ—by grace you have been saved.", "refTag": "Ephesians 2:4-5",
            "quote2": "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.", "refTag2": "Ephesians 2:8-9"
        },
        "September 7": { "quote": "Ponder the path of your feet; then all your ways will be sure. Do not swerve to the right or to the left; turn your foot away from evil.", "refTag": "Proverbs 4:26-27" },
        "September 8": { "quote": "Commit your work to the Lord, and your plans will be established.", "refTag": "Proverbs 16:3" },
        "September 9": { "quote": "The light of the righteous rejoices, but the lamp of the wicked will be put out.", "refTag": "Proverbs 13:9" },
        "September 10": { "quote": "The heart of man plans his way, but the Lord establishes his steps.", "refTag": "Proverbs 16:9" },
        "September 11": { "quote": "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?", "refTag": "Psalm 27:1" },
        "September 12": { "quote": "Is a lamp brought in to be put under a basket, or under a bed, and not on a stand? For nothing is hidden except to be made manifest; nor is anything secret except to come to light. If anyone has ears to hear, let him hear.", "refTag": "Mark 4:21-23" },
        "September 13": { "quote": "For it is you who light my lamp; the Lord my God lightens my darkness.", "refTag": "Psalm 18:28" },
        "September 14": {
            "quote": "A man’s steps are from the Lord; how then can man understand his way?", "refTag": "Proverbs 20:24",
            "quote2": "Many are the plans in the mind of a man, but it is the purpose of the Lord that will stand.", "refTag2": "Proverbs 19:21"
        },
        "September 15": { "quote": "No one after lighting a lamp puts it in a cellar or under a basket, but on a stand, so that those who enter may see the light.  Your eye is the lamp of your body. When your eye is healthy, your whole body is full of light, but when it is bad, your body is full of darkness. Therefore be careful lest the light in you be darkness. If then your whole body is full of light, having no part dark, it will be wholly bright, as when a lamp with its rays gives you light.", "refTag": "Luke 11:33-36" },
        "September 16": { "quote": "In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.", "refTag": "John 1:4-5" },
        "September 17": { "quote": "Your word is a lamp to my feet and a light to my path.", "refTag": "Psalm 119:105" },
        "September 18": { "quote": "The spirit of man is the lamp of the Lord, searching all his innermost parts.", "refTag": "Proverbs 20:27" },
        "September 19": { "quote": "And this is the judgment: the light has come into the world, and people loved the darkness rather than the light because their deeds were evil. For everyone who does wicked things hates the light and does not come to the light, lest his deeds should be exposed. But whoever does what is true comes to the light, so that it may be clearly seen that his deeds have been carried out in God.", "refTag": "John 3:19-21" },
        "September 20": { "quote": "The unfolding of your words gives light; it imparts understanding to the simple.", "refTag": "Psalm 119:130" },
        "September 21": { "quote": "Again Jesus spoke to them, saying, “I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.”", "refTag": "John 8:12" },
        "September 22": { "quote": "Jesus answered, “Are there not twelve hours in the day? If anyone walks in the day, he does not stumble, because he sees the light of this world. But if anyone walks in the night, he stumbles, because the light is not in him.”", "refTag": "John 11:9-10" },
        "September 23": { "quote": "While you have the light, believe in the light, that you may become sons of light.", "refTag": "John 12:36" },
        "September 24": { "quote": "I have come into the world as light, so that whoever believes in me may not remain in darkness.", "refTag": "John 12:46" },
        "September 25": { "quote": "Desire without knowledge is not good, and whoever makes haste with his feet misses his way.", "refTag": "Proverbs 19:2" },
        "September 26": { "quote": "Send out your light and your truth; let them lead me; let them bring me to your holy hill and to your dwelling! Then I will go to the altar of God, to God my exceeding joy, and I will praise you with the lyre, O God, my God.", "refTag": "Psalm 43:3-4" },
        "September 27": { "quote": "For the Lord gives wisdom; from his mouth come knowledge and understanding; he stores up sound wisdom for the upright; he is a shield to those who walk in integrity, guarding the paths of justice and watching over the way of his saints. Then you will understand righteousness and justice and equity, every good path; for wisdom will come into your heart, and knowledge will be pleasant to your soul; discretion will watch over you, understanding will guard you, delivering you from the way of evil, from men of perverted speech, who forsake the paths of uprightness to walk in the ways of darkness, who rejoice in doing evil and delight in the perverseness of evil, men whose paths are crooked, and who are devious in their ways.", "refTag": "Proverbs 2:6-15" },
        "September 28": { "quote": "This is the message we have heard from him and proclaim to you, that God is light, and in him is no darkness at all. If we say we have fellowship with him while we walk in darkness, we lie and do not practice the truth. But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin.", "refTag": "1 John 1:5-7" },
        "September 29": { "quote": "Plead my cause and redeem me; give me life according to your promise!", "refTag": "Psalm 119:154" },
        "September 30": { "quote": "You are the Light of the world. A city set on a hill cannot be hidden.  Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house. In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.", "refTag": "Matthew 5:14-16" },
        "October 1": { "quote": "Search me, O God, and know my heart! Try me and know my thoughts! And see if there be any grievous way in me, and lead me in the way everlasting!", "refTag": "Psalm 139:23-24" },
        "October 2": {
            "quote": "I bless the Lord who gives me counsel; in the night also my heart instructs me. I have set the Lord always before me; because he is at my right hand, I shall not be shaken.", "refTag": "Psalm 16:7-8",
            "quote2": "The counsel of the Lord stands forever, the plans of his heart to all generations.", "refTag2": "Psalm 33:11"
        },
        "October 3": { "quote": "For there is one God, and there is one mediator between God and men, the man Christ Jesus.", "refTag": "1 Timothy 2:5" },
        "October 4": { "quote": "Do not think that I will accuse you to the Father. There is one who accuses you: Moses, on whom you have set your hope. If you believed Moses, you would believe me; for he wrote of me. But if you do not believe his writings, how will you believe my words?", "refTag": "John 5:45-47" },
        "October 5": { "quote": "Who shall bring any charge against God’s elect? It is God who justifies. Who is to condemn? Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us. Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword?", "refTag": "Romans 8:33-35" },
        "October 6": { "quote": "And I will lead the blind in a way that they do not know, in paths that they have not known I will guide them. I will turn the darkness before them into light, the rough places into level ground. These are the things I do, and I do not forsake them.", "refTag": "Isaiah 42:16" },
        "October 7": { "quote": "You judge according to the flesh; I judge no one. Yet even if I do judge, my judgment is true, for it is not I alone who judge, but I and the Father who sent me.", "refTag": "John 8:15-16" },
        "October 8": { "quote": "My little children, I am writing these things to you so that you may not sin. But if anyone does sin, we have an advocate with the Father, Jesus Christ the righteous. He is the propitiation for our sins, and not for ours only but also for the sins of the whole world. And by this we know that we have come to know him, if we keep his commandments. Whoever says “I know him” but does not keep his commandments is a liar, and the truth is not in him, but whoever keeps his word, in him truly the love of God is perfected. By this we may be sure that we are in him: whoever says he abides in him ought to walk in the same way in which he walked.", "refTag": "1 John 2:1-6" },
        "October 9": { "quote": "The Father judges no one, but has given all judgment to the Son, that all may honor the Son, just as they honor the Father. Whoever does not honor the Son does not honor the Father who sent him. Truly, truly, I say to you, whoever hears my word and believes him who sent me has eternal life. He does not come into judgment, but has passed from death to life.", "refTag": "John 5:22-24" },
        "October 10": { "quote": "And I tell you, everyone who acknowledges me before men, the Son of Man also will acknowledge before the angels of God, but the one who denies me before men will be denied before the angels of God.", "refTag": "Luke 12:8-9" },
        "October 11": { "quote": "Yet I do not seek my own glory; there is One who seeks it, and he is the judge.", "refTag": "John 8:50" },
        "October 12": { "quote": "Jesus said, “For judgment I came into this world, that those who do not see may see, and those who see may become blind.”", "refTag": "John 9:39" },
        "October 13": { "quote": "If anyone hears my words and does not keep them, I do not judge him; for I did not come to judge the world but to save the world. The one who rejects me and does not receive my words has a judge; the word that I have spoken will judge him on the last day. For I have not spoken on my own authority, but the Father who sent me has himself given me a commandment—what to say and what to speak. And I know that his commandment is eternal life. What I say, therefore, I say as the Father has told me.", "refTag": "John 12:47-50" },
        "October 14": { "quote": "Mankind will say, “Surely there is a reward for the righteous; surely there is a God who judges on earth.”", "refTag": "Psalm 58:11" },
        "October 15": { "quote": "Do not speak evil against one another, brothers. The one who speaks against a brother or judges his brother, speaks evil against the law and judges the law. But if you judge the law, you are not a doer of the law but a judge. There is only one lawgiver and judge, he who is able to save and to destroy. But who are you to judge your neighbor?", "refTag": "James 4:11-12" },
        "October 16": { "quote": "For as the Father has life in himself, so he has granted the Son also to have life in himself. And he has given him authority to execute judgment, because he is the Son of Man. Do not marvel at this, for an hour is coming when all who are in the tombs will hear his voice and come out, those who have done good to the resurrection of life, and those who have done evil to the resurrection of judgment. “I can do nothing on my own. As I hear, I judge, and my judgment is just, because I seek not my own will but the will of him who sent me.”", "refTag": "John 5:26-30" },
        "October 17": { "quote": "The Lord looks down from heaven; he sees all the children of man; from where he sits enthroned he looks out on all the inhabitants of the earth, he who fashions the hearts of them all and observes all their deeds.", "refTag": "Psalm 33:13-15" },
        "October 18": { "quote": "And if you call on him as Father who judges impartially according to each one’s deeds, conduct yourselves with fear throughout the time of your exile, knowing that you were ransomed from the futile ways inherited from your forefathers, not with perishable things such as silver or gold, but with the precious blood of Christ, like that of a lamb without blemish or spot.", "refTag": "1 Peter 1:17-19" },
        "October 19": { "quote": "Hear a just cause, O Lord; attend to my cry! Give ear to my prayer from lips free of deceit! From your presence let my vindication come! Let your eyes behold the right! You have tried my heart, you have visited me by night, you have tested me, and you will find nothing; I have purposed that my mouth will not transgress. With regard to the works of man, by the word of your lips I have avoided the ways of the violent. My steps have held fast to your paths; my feet have not slipped. I call upon you, for you will answer me, O God; incline your ear to me; hear my words. Wondrously show your steadfast love, O Savior of those who seek refuge from their adversaries at your right hand.", "refTag": "Psalm 17:1-7" },
        "October 20": { "quote": "For your name’s sake, O Lord, pardon my guilt, for it is great.", "refTag": "Psalm 25:11" },
        "October 21": { "quote": "Let the nations be glad and sing for joy, for you judge the peoples with equity and guide the nations upon earth.", "refTag": "Psalm 67:4" },
        "October 22": { "quote": "He will judge the world with righteousness, and the peoples with equity.", "refTag": "Psalm 98:9" },
        "October 23": { "quote": ". . . but it is God who executes judgment, putting down one and lifting up another.", "refTag": "Psalm 75:7" },
        "October 24": { "quote": "Why do you pass judgment on your brother? Or you, why do you despise your brother? For we will all stand before the judgment seat of God. . .", "refTag": "Romans 14:10" },
        "October 25": { "quote": "From the heavens you uttered judgment; the earth feared and was still, when God arose to establish judgment, to save all the humble of the earth.", "refTag": "Psalm 76:8-9" },
        "October 26": { "quote": "Ascribe to the Lord, O families of the peoples, ascribe to the Lord glory and strength! Ascribe to the Lord the glory due his name; bring an offering, and come into his courts! Worship the Lord in the splendor of holiness; tremble before him, all the earth! Say among the nations, “The Lord reigns! Yes, the world is established; it shall never be moved; he will judge the peoples with equity.” Let the heavens be glad, and let the earth rejoice; let the sea roar, and all that fills it; let the field exult, and everything in it! Then shall all the trees of the forest sing for joy before the Lord, for he comes, for he comes to judge the earth. He will judge the world in righteousness, and the peoples in his faithfulness.", "refTag": "Psalm 96:7-13" },
        "October 27": { "quote": "For God shows no partiality.", "refTag": "Romans 2:11" },
        "October 28": { "quote": "Hear my prayer, O Lord; give ear to my pleas for mercy! In your faithfulness answer me, in your righteousness! Enter not into judgment with your servant, for no one living is righteous before you.", "refTag": "Psalm 143:1-2" },
        "October 29": { "quote": "The Lord reigns, let the earth rejoice; let the many coastlands be glad! Clouds and thick darkness are all around him; righteousness and justice are the foundation of his throne. Fire goes before him and burns up his adversaries all around. His lightning’s light up the world; the earth sees and trembles. The mountains melt like wax before the Lord, before the Lord of all the earth. The heavens proclaim his righteousness, and all the peoples see his glory. All worshipers of images are put to shame, who make their boast in worthless idols; worship him, all you gods! Zion hears and is glad, and the daughters of Judah rejoice, because of your judgments, O Lord. For you, O Lord, are most high over all the earth; you are exalted far above all gods. O you who love the Lord, hate evil! He preserves the lives of his saints; he delivers them from the hand of the wicked. Light is sown for the righteous, and joy for the upright in heart. Rejoice in the Lord, O you righteous, and give thanks to his holy name!", "refTag": "Psalm 97:1-12" },
        "October 30": { "quote": "Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways!", "refTag": "Romans 11:33" },
        "October 31": { "quote": "Great are the works of the Lord, studied by all who delight in them. Full of splendor and majesty is his work, and his righteousness endures forever. He has caused his wondrous works to be remembered; the Lord is gracious and merciful. He provides food for those who fear him; he remembers his covenant forever. He has shown his people the power of his works, in giving them the inheritance of the nations. The works of his hands are faithful and just; all his precepts are trustworthy; they are established forever and ever, to be performed with faithfulness and uprightness. He sent redemption to his people; he has commanded his covenant forever. Holy and awesome is his name! The fear of the Lord is the beginning of wisdom; all those who practice it have a good understanding. His praise endures forever!", "refTag": "Psalm 111:2-10" },
        "November 1": { "quote": "They seek a vision from the prophet, while the law perishes from the priest and counsel from the elders. The king mourns, the prince is wrapped in despair, and the hands of the people of the land are paralyzed by terror. According to their way I will do to them, and according to their judgments I will judge them, and they shall know that I am the Lord.", "refTag": "Ezekiel 7:26-27" },
        "November 2": { "quote": "Anyone who has set aside the law of Moses dies without mercy on the evidence of two or three witnesses. How much worse punishment, do you think, will be deserved by the one who has spurned the Son of God, and has profaned the blood of the covenant by which he was sanctified, and has outraged the Spirit of grace? For we know him who said, “Vengeance is mine; I will repay.” And again, “The Lord will judge his people.” It is a fearful thing to fall into the hands of the living God.", "refTag": "Hebrews 10:28-33" },
        "November 3": { "quote": "Truly no man can ransom another, or give to God the price of his life, for the ransom of their life is costly and can never suffice.", "refTag": "Psalm 49:7-8" },
        "November 4": { "quote": "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity, and cleanse me from my sin! For I know my transgressions, and my sin is ever before me. Against you, you only, have I sinned and done what is evil in your sight, so that you may be justified in your words and blameless in your judgment.", "refTag": "Psalm 51:1-4" },
        "November 5": { "quote": "Help us, O God of our salvation, for the glory of your name; deliver us, and atone for our sins, for your name’s sake!", "refTag": "Psalm 79:9" },
        "November 6": { "quote": "Show us your steadfast love, O Lord, and grant us your salvation. Let me hear what God the Lord will speak, for he will speak peace to his people, to his saints; but let them not turn back to folly. Surely his salvation is near to those who fear him, that glory may dwell in our land. Steadfast love and faithfulness meet; righteousness and peace kiss each other. Faithfulness springs up from the ground, and righteousness looks down from the sky. Yes, the Lord will give what is good, and our land will yield its increase. Righteousness will go before him and make his footsteps a way.", "refTag": "Psalm 85:7-13" },
        "November 7": { "quote": "My soul longs for your salvation; I hope in your word.", "refTag": "Psalm 119:81" },
        "November 8": { "quote": "Whoever believes in the Son has eternal life; whoever does not obey the Son shall not see life, but the wrath of God remains on him.", "refTag": "John 3:36" },
        "November 9": { "quote": "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.", "refTag": "Romans 6:23" },
        "November 10": { "quote": "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him. Whoever believes in him is not condemned, but whoever does not believe is condemned already, because he has not believed in the name of the only Son of God.", "refTag": "John 3:16-18" },
        "November 11": { "quote": "For while we were still weak, at the right time Christ died for the ungodly. For one will scarcely die for a righteous person—though perhaps for a good person one would dare even to die—but God shows his love for us in that while we were still sinners, Christ died for us. Since, therefore, we have now been justified by his blood, much more shall we be saved by him from the wrath of God. For if while we were enemies we were reconciled to God by the death of his Son, much more, now that we are reconciled, shall we be saved by his life.", "refTag": "Romans 5:6-10" },
        "November 12": { "quote": ". . . .we also rejoice in God through our Lord Jesus Christ, through whom we have now received reconciliation. Therefore, just as sin came into the world through one man, and death through sin, and so death spread to all men because all sinned—for sin indeed was in the world before the law was given, but sin is not counted where there is no law.", "refTag": "Romans 5:11-13" },
        "November 13": { "quote": "Yet death reigned from Adam to Moses, even over those whose sinning was not like the transgression of Adam, who was a type of the one who was to come. But the free gift is not like the trespass. For if many died through one man’s trespass, much more have the grace of God and the free gift by the grace of that one man Jesus Christ abounded for many. And the free gift is not like the result of that one man’s sin. For the judgment following one trespass brought condemnation, but the free gift following many trespasses brought justification. If, because of one man’s trespass, death reigned through that one man, much more will those who receive the abundance of grace and the free gift of righteousness reign in life through the one man Jesus Christ. Therefore, as one trespass led to condemnation for all men, so one act of righteousness leads to justification and life for all men. For as by the one man’s disobedience the many were made sinners, so by the one man’s obedience the many will be made righteous.", "refTag": "Romans 5:14-19" },
        "November 14": { "quote": "Now the law came in to increase the trespass, but where sin increased, grace abounded all the more, so that, as sin reigned in death, grace also might reign through righteousness leading to eternal life through Jesus Christ our Lord.", "refTag": "Romans 5:20-21" },
        "November 15": { "quote": "There is therefore now no condemnation for those who are in Christ Jesus. For the law of the Spirit of life has set you free in Christ Jesus from the law of sin and death. For God has done what the law, weakened by the flesh, could not do. By sending his own Son in the likeness of sinful flesh and for sin, he condemned sin in the flesh, in order that the righteous requirement of the law might be fulfilled in us, who walk not according to the flesh but according to the Spirit.", "refTag": "Romans 8:1-4" },
        "November 16": { "quote": "Sacrifice and offering you have not desired, but you have given me an open ear. Burnt offering and sin offering you have not required. Then I said, “Behold, I have come; in the scroll of the book it is written of me: I desire to do your will, O my God; your law is within my heart.”", "refTag": "Psalm 40:6-8" },
        "November 17": {
            "quote": "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places, even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love he predestined us for adoption through Jesus Christ, according to the purpose of his will, to the praise of his glorious grace, with which he has blessed us in the Beloved. In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace, which he lavished upon us, in all wisdom and insight making known to us the mystery of his will, according to his purpose, which he set forth in Christ as a plan for the fullness of time, to unite all things in him, things in heaven and things on earth.", "refTag": "Ephesians 1:3-10",
            "quote2": "In him we have obtained an inheritance, having been predestined according to the purpose of him who works all things according to the counsel of his will, so that we who were the first to hope in Christ might be to the praise of his glory. In him you also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit, who is the guarantee of our inheritance until we acquire possession of it, to the praise of his glory.", "refTag2": "Ephesians 1:11-14"
        },
        "November 18": { "quote": "Therefore he is the mediator of a new covenant, so that those who are called may receive the promised eternal inheritance, since a death has occurred that redeems them from the transgressions committed under the first covenant. For where a will is involved, the death of the one who made it must be established. For a will takes effect only at death, since it is not in force as long as the one who made it is alive. Therefore not even the first covenant was inaugurated without blood. For when every commandment of the law had been declared by Moses to all the people, he took the blood of calves and goats, with water and scarlet wool and hyssop, and sprinkled both the book itself and all the people, saying, “This is the blood of the covenant that God commanded for you.” And in the same way he sprinkled with the blood both the tent and all the vessels used in worship. Indeed, under the law almost everything is purified with blood, and without the shedding of blood there is no forgiveness of sins. Thus it was necessary for the copies of the heavenly things to be purified with these rites, but the heavenly things themselves with better sacrifices than these. For Christ has entered, not into holy places made with hands, which are copies of the true things, but into heaven itself, now to appear in the presence of God on our behalf.", "refTag": "Hebrews 9:15-24" },
        "November 19": { "quote": "As you come to him, a living stone rejected by men but in the sight of God chosen and precious, you yourselves like living stones are being built up as a spiritual house, to be a holy priesthood, to offer spiritual sacrifices acceptable to God through Jesus Christ. For it stands in Scripture: “Behold, I am laying in Zion a stone, a cornerstone chosen and precious, and whoever believes in him will not be put to shame.” So the honor is for you who believe, but for those who do not believe, “The stone that the builders rejected has become the cornerstone,” and “A stone of stumbling, and a rock of offense.” They stumble because they disobey the word, as they were destined to do.", "refTag": "1 Peter 2:4-8" },
        "November 20": { "quote": "It will be counted to us who believe in him who raised from the dead Jesus our Lord, who was delivered up for our trespasses and raised for our justification.", "refTag": "Romans 4:24-25" },
        "November 21": { "quote": "And walk in love, as Christ loved us and gave himself up for us, a fragrant offering and sacrifice to God.", "refTag": "Ephesians 5:2" },
        "November 22": { "quote": "For you will not delight in sacrifice, or I would give it; you will not be pleased with a burnt offering. The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise.", "refTag": "Psalm 51:16-17" },
        "November 23": { "quote": "For I desire steadfast love and not sacrifice, the knowledge of God rather than burnt offerings.", "refTag": "Hosea 6:6" },
        "November 24": { "quote": "Be merciful, even as your Father is merciful.", "refTag": "Luke 6:36" },
        "November 25": { "quote": "For if you forgive others their trespasses, your heavenly Father will also forgive you, but if you do not forgive others their trespasses, neither will your Father forgive your trespasses.", "refTag": "Matthew 6:14-15" },
        "November 26": { "quote": "Early in the morning he came again to the temple. All the people came to him, and he sat down and taught them. The scribes and the Pharisees brought a woman who had been caught in adultery, and placing her in the midst they said to him, “Teacher, this woman has been caught in the act of adultery. Now in the Law Moses commanded us to stone such women. So what do you say?” This they said to test him, that they might have some charge to bring against him. Jesus bent down and wrote with his finger on the ground. And as they continued to ask him, he stood up and said to them, “Let him who is without sin among you be the first to throw a stone at her.” And once more he bent down and wrote on the ground. But when they heard it, they went away one by one, beginning with the older ones, and Jesus was left alone with the woman standing before him. Jesus stood up and said to her, “Woman, where are they? Has no one condemned you?” She said, “No one, Lord.” And Jesus said, “Neither do I condemn you; go, and from now on sin no more.”", "refTag": "John 8:2-11" },
        "November 27": { "quote": "If one turns away his ear from hearing the law, even his prayer is an abomination.", "refTag": "Proverbs 28:9" },
        "November 28": { "quote": "Listen, my beloved brothers, has not God chosen those who are poor in the world to be rich in faith and heirs of the kingdom, which he has promised to those who love him? But you have dishonored the poor man. Are not the rich the ones who oppress you, and the ones who drag you into court? Are they not the ones who blaspheme the honorable name by which you were called?", "refTag": "James 2:5-7" },
        "November 29": { "quote": "For whoever keeps the whole law but fails in one point has become accountable for all of it.", "refTag": "James 2:10" },
        "November 30": { "quote": "God looks down from heaven on the children of man to see if there are any who understand, who seek after God. They have all fallen away; together they have become corrupt; there is none who does good, not even one.", "refTag": "Psalm 53:2-3" },
        "December 1": { "quote": "For all have sinned and fall short of the glory of God.", "refTag": "Romans 3:23" },
        "December 2": { "quote": "Let them praise the name of the Lord! For he commanded and they were created. And he established them forever and ever; he gave a decree, and it shall not pass away.", "refTag": "Psalm 148:5-6" },
        "December 3": { "quote": "‘Can mortal man be in the right before God? Can a man be pure before his Maker?’", "refTag": "Job 4:17" },
        "December 4": { "quote": "‘How then can man be in the right before God? How can he who is born of woman be pure?’", "refTag": "Job 25:4" },
        "December 5": { "quote": "But it is easier for heaven and earth to pass away than for one dot of the Law to become void.", "refTag": "Luke 16:17" },
        "December 6": { "quote": "So if you are offering your gift at the altar and there remember that your brother has something against you, leave your gift there before the altar and go. First be reconciled to your brother, and then come and offer your gift.", "refTag": "Matthew 5:23-24" },
        "December 7": { "quote": "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them. For truly, I say to you, until heaven and earth pass away, not an iota, not a dot, will pass from the Law until all is accomplished. Therefore whoever relaxes one of the least of these commandments and teaches others to do the same will be called least in the kingdom of heaven, but whoever does them and teaches them will be called great in the kingdom of heaven. For I tell you, unless your righteousness exceeds that of the scribes and Pharisees, you will never enter the kingdom of heaven.", "refTag": "Matthew 5:17-20" },
        "December 8": { "quote": "Come to terms quickly with your accuser while you are going with him to court, lest your accuser hand you over to the judge, and the judge to the guard, and you be put in prison. Truly, I say to you, you will never get out until you have paid the last penny.", "refTag": "Matthew 5:25-26" },
        "December 9": { "quote": "[A Pharisee lawyer asked Jesus]”Teacher, which is the great commandment in the Law?” And he said to him, “You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself. On these two commandments depend all the Law and the Prophets.”", "refTag": "Matthew 22:36-40" },
        "December 10": { "quote": "You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about me, yet you refuse to come to me that you may have life.", "refTag": "John 5:39-40" },
        "December 11": { "quote": "What then shall we say? That the law is sin? By no means! Yet if it had not been for the law, I would not have known sin. I would not have known what it is to covet if the law had not said, “You shall not covet.” But sin, seizing an opportunity through the commandment, produced in me all kinds of covetousness. Apart from the law, sin lies dead. I was once alive apart from the law, but when the commandment came, sin came alive and I died. The very commandment that promised life proved to be death to me. For sin, seizing an opportunity through the commandment, deceived me and through it killed me. So the law is holy, and the commandment is holy and righteous and good. Did that which is good, then, bring death to me? By no means! It was sin, producing death in me through what is good, in order that sin might be shown to be sin, and through the commandment might become sinful beyond measure. For we know that the law is spiritual, but I am of the flesh, sold under sin.", "refTag": "Romans 7:7-14" },
        "December 12": {
            "quote": "For sin will have no dominion over you, since you are not under law but under grace.", "refTag": "Romans 6:14",
            "quote2": "But now we are released from the law, having died to that which held us captive, so that we serve not under the old written code but in the new life of the Spirit.", "refTag2": "Romans 7:6"
        },
        "December 13": { "quote": "What shall we say, then? That Gentiles who did not pursue righteousness have attained it, that is, a righteousness that is by faith; but that Israel who pursued a law that would lead to righteousness did not succeed in reaching that law. Why? Because they did not pursue it by faith, but as if it were based on works. They have stumbled over the stumbling stone, as it is written, “Behold, I am laying in Zion a stone of stumbling, and a rock of offense; and whoever believes in him will not be put to shame.”", "refTag": "Romans 9:30-33" },
        "December 14": { "quote": "Such is the confidence that we have through Christ toward God. Not that we are sufficient in ourselves to claim anything as coming from us, but our sufficiency is from God, who has made us competent to be ministers of a new covenant, not of the letter but of the Spirit. For the letter kills, but the Spirit gives life.", "refTag": "2 Corinthians 3:4-6" },
        "December 15": { "quote": "Now we know that whatever the law says it speaks to those who are under the law, so that every mouth may be stopped, and the whole world may be held accountable to God. For by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin. But now the righteousness of God has been manifested apart from the law, although the Law and the Prophets bear witness to it – the righteousness of God through faith in Jesus Christ for all who believe. For there is no distinction: for all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus, God put forward as a propitiation by his blood, to be received by faith. This was to show God's righteousness, because in his divine forbearance he had passed over former sins. It was to show his righteousness at the present time, so that he might be just and the justifier of the one who has faith in Jesus.", "refTag": "Romans 3:19-26" },
        "December 16": { "quote": "For Christ is the end of the law for righteousness to everyone who believes.", "refTag": "Romans 10:4" },
        "December 17": { "quote": "(For the law made nothing perfect); but on the other hand, a better hope is introduced, through which we draw near to God.", "refTag": "Hebrews 7:19" },
        "December 18": { "quote": "For through the law I died to the law, so that I might live to God. I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me. I do not nullify the grace of God, for if justification were through the law, then Christ died for no purpose.", "refTag": "Galatians 2:19-21" },
        "December 19": { "quote": "Now before faith came, we were held captive under the law, imprisoned until the coming faith would be revealed. So then, the law was our guardian until Christ came, in order that we might be justified by faith. But now that faith has come, we are no longer under a guardian, for in Christ Jesus you are all sons of God, through faith.", "refTag": "Galatians 3:23-26" },

        "December 20": {
            "quote": "For the whole law is fulfilled in one word: “You shall love your neighbor as yourself.”", "refTag": "Galatians 5:14",
            "quote2": "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.", "refTag2": "Galatians 5:22-23"
        },




        "December 21": { "quote": "For this is the covenant that I will make with the house of Israel after those days, declares the Lord: I will put my laws into their minds, and write them on their hearts, and I will be their God, and they shall be my people.", "refTag": "Hebrews 8:10" },
        "December 22": { "quote": "But be doers of the word, and not hearers only, deceiving yourselves. For if anyone is a hearer of the word and not a doer, he is like a man who looks intently at his natural face in a mirror. For he looks at himself and goes away and at once forgets what he was like. But the one who looks into the perfect law, the law of liberty, and perseveres, being no hearer who forgets but a doer who acts, he will be blessed in his doing.", "refTag": "James 1:22-25" },
        "December 23": { "quote": "Everyone who makes a practice of sinning also practices lawlessness; sin is lawlessness. You know that he appeared to take away sins, and in him there is no sin.", "refTag": "1 John 3:4-5" },
        "December 24": { "quote": "And Jesus came and said to them, “All authority in heaven and on earth has been given to me.”", "refTag": "Matthew 28:18" },
        "December 25": { "quote": "Everyone who believes that Jesus is the Christ has been born of God, and everyone who loves the Father loves whoever has been born of him. By this we know that we love the children of God, when we love God and obey his commandments. For this is the love of God, that we keep his commandments. And his commandments are not burdensome. For everyone who has been born of God overcomes the world. And this is the victory that has overcome the world—our faith. Who is it that overcomes the world except the one who believes that Jesus is the Son of God?", "refTag": "1 John 5:1-5" },
        "December 26": { "quote": "And he commanded us to preach to the people and to testify that he is the one appointed by God to be judge of the living and the dead.", "refTag": "Acts 10:42" },
        "December 27": { "quote": "And he said to them, “You are those who justify yourselves before men, but God knows your hearts. For what is exalted among men is an abomination in the sight of God.”", "refTag": "Luke 16:15" },
        "December 28": { "quote": "Behold, I am coming soon, bringing my recompense with me, to repay everyone for what he has done.", "refTag": "Revelation 22:12" },
        "December 29": { "quote": "He also told this parable to some who trusted in themselves that they were righteous, and treated others with contempt: “Two men went up into the temple to pray, one a Pharisee and the other a tax collector. The Pharisee, standing by himself, prayed thus: ‘God, I thank you that I am not like other men, extortioners, unjust, adulterers, or even like this tax collector. I fast twice a week; I give tithes of all that I get.’ But the tax collector, standing far off, would not even lift up his eyes to heaven, but beat his breast, saying, ‘God, be merciful to me, a sinner!’ I tell you, this man went down to his house justified, rather than the other. For everyone who exalts himself will be humbled, but the one who humbles himself will be exalted.”", "refTag": "Luke 18:9-14" },
        "December 30": { "quote": "I have fought the good fight, I have finished the race, I have kept the faith. Henceforth there is laid up for me the crown of righteousness, which the Lord, the righteous judge, will award to me on that Day, and not only to me but also to all who have loved his appearing.", "refTag": "2 Timothy 4:7-8" },
        "December 31": { "quote": "May the Lord fulfill all your petitions!", "refTag": "Psalm 20:5" }

    };
    console.log(quotePicker);
	
	
	
	var pickedDate = moment().format("MMMM D");
	 $("#pickedDate").html(moment().format("MMMM D")),
    $("#quotepicker").html(quotePicker[pickedDate].quote),
    $("#datePickerVerseRefTag").html(quotePicker[pickedDate].refTag),
    $("#datePickerVerse2").html(quotePicker[pickedDate].quote2),
    $("#datePickerVerseRefTag2").html(quotePicker[pickedDate].refTag2),
    $("#datePickerTime").html(moment().format("MMMM Do YYYY, h:mm:ss a"));
    setInterval(function () {
        $("#datePickerTime").html(moment().format("h:mm:ss a")),
        pickedDate !== moment().format("MMMM D") && ($("#pickedDate").html(moment().format("MMMM D")),
        pickedDate = moment().format("MMMM D"),
        $("#quotepicker").html(quotePicker[pickedDate].quote),
        $("#datePickerVerseRefTag").html(quotePicker[pickedDate].refTag),
        $("#datePickerVerse2").html(quotePicker[pickedDate].quote2),
        $("#datePickerVerseRefTag2").html(quotePicker[pickedDate].refTag2))
    }, 1000);	
	
if(checkDate) {
	node.textContent (    $("#quotepicker").html(quotePicker[pickedDate].quote));
	
}	
	
/*	function checkDate(today, pickedDate() {
    return today.getFullYear() == pickedDate.getFullYear()
        && today.getMonth() == pickedDate.getMonth()
        && today.getDate() == pickedDate.getDate();
}
	if (checkDate( new Date(userString), new Date()
	
	
	if(document.getElementById('pickedDate').setHours(0,0,0,0) === today.setHours(0,0,0,0)){
		// Date equals today's date
		alert(pickedDate.setHours(0,0,0,0) == today.setHours(0,0,0,0));
	}
	var c = new document.getElementById('pickedDate').addEventListener;
	while (today === c){
		console.log('working here');
		return("do something");
	}
	
	document.getElementById('quotepicker').onchange = function(){
		var selem = document.getElementById('quotepicker');
		document.getElementById('someinput').value = selem.options[selem.selectedIndex].value;
	}
	
	if(Date.now()===document.getElementById("PickedDate").value {
		
	})
	   
});

// listen for date comparison TODAY vs selectedDate from datepicker
		
$("#datepicker_xxx").datepicker("getDate");*/
		
checkDate();	
alert('formula seems to work');