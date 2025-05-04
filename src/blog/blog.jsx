

import './blog.css';
import Navbar from '../navbar/navbar.jsx';
import Contact from '../contact/contact';
export default function Blog() {

    return (
        <>
        <Navbar/>
            <div className='blogcontainer'>
                <h1 className = "blogh1">My Thoughts</h1>
                <div className = 'warning'>
                <h2 className = "blogh2">Warning: Although these thoughts reveal more clearly how I navigate through life, reading it may not be for everyone.   </h2>
                </div>
                <div className='blog'>
                    <h2 classname = "blogh2">Entry 1</h2>
                    <h3 className = "blogh3">2:02 AM - May 5th, 2025</h3>
                    <h4 className = "blogh4">My Night-time Thoughts on Highschool</h4>
                    <p lassName = "blogp">
                    I am almost finished highschool—I'm well into the second semester of grade 12 and as an IB student, all there is left are exams, which means, I have already started skipping to prepare for them.   And as I reflect over my high school years, I honestly feel disappointed.  I came into highschool aiming to be the best at everything I set myself in, dedicated to being productive with my life so that when I would look back at my high-school years, I would not feel as disappointed as I do now.   I’m not only not the best in my passions of running, coding, and math—which I hoped to be, but I have also not tried my very hardest in school.  I came into highschool aiming to have no regrets, and honestly today, that's all I have now. I achieved almost none of the goals I have set for myself which I whole-heartedly believe I could have achieved like qualifying for Math and Coding Olympiads
or getting into MIT...
</p>
<div></div>

<p className = "blogp">
           High School was supposed to be an opportunity for growth.  But all I developed were bad habits and a loss of confidence.  It is not the high school’s fault, I am to blame for all my failures.  Good things did happen.  But not to the degree I was expecting.   My two goals are now, unfortunately impossible.  I have failed.  I have let my past-self down and honestly I feel downgraded as a person.  I expected to feel more mature and A LOT smarter as I progressed through highschool, but I feel the same intelligence—maybe less, from when I first entered high-school.
	The situation I found myself in can only be attributed to me, and thus, I hope using this blog and journal, I can keep myself accountable as I move on past these regrets and show everyone what I can truly do.  
	So, what should be my focus now?  My dream, my end-all-be-all, my penultimate goal?  I was prepared to die for my dreams, but obviously if I truly was, the present would be a lot different.  I still have not lost hope for achieving success, being remembered, and having a minimum amount of regrets.  I still have not lost. I still have it in me to become better than all my competition.  In fact, I still truly believe I can be the best at anything I truly set my eyes to.  I know what I am capable of— how far I can push.  And this time? I will not settle for less until i’m fucking dead.  I will not let the pain of thousands of kilometers, hours, and hardwork in highschool go to waste.  I will not let failed-engineers, failed-doctors, stagnant, lazy, fat, weak, and complacent nobodies tell me what I can or can’t do. 
</p>
</div>
<p className = "blogp">
On a similar note, to all the doubters out there:
Don’t compare me with you who long gave up being the best and achieving your dreams.  I’m willing to die for this, you sheltered plebs are not.  I would rather kill myself than live out a pitiful life like yours.
</p>
<div>
</div>
<p className = "blogp">
  	To end this, honestly, I hope the next time I enter this journal, I will be in a much better situation.  I will commit my remaining high school year to completing the IB Program, refining my three passions of running, math, and coding, and achieving something great.  
</p>                </div>
<Contact/>
        </>
    );


}