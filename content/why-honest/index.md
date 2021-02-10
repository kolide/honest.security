---
title: Why "Honest"?
weight: 200
---

# Why "Honest"?

We titled this guide Honest Security because we feel that the current approach
practiced by most organizations can feel dishonest to many end-users.

## Dishonesty Stops You From Doing the Right Thing

Do you work on a security team and think that’s an unfair assessment? Well, let
me ask you a question; when was the last time you reached out to one of your
colleagues to help them remove some adware or an evil browser extension that
posed no threat to the company, but impacted their personal privacy?

To perform this simple service, a security team member must reach out to a user,
admit there are tools installed monitoring the security of the device, educate
them about this scope of this monitoring, and acknowledge that a human being is
scrutinizing their installed apps and browser extensions, even when they affect
personal information. After that’s done, you will need to finally ask for their
permission to delete the app or remove the browser extension, a process that
could perhaps impact their personal devices.

It’s no wonder this rarely happens. The friction involved in this helpful
gesture is enormous. How do you help someone when in your first interaction you
have to explain to them who you are, what your team does and expose the lack of
transparency into the surveillance apparatus you use to perform your mission?
The dishonesty in this case stems from lies of omission. We allow the end-users
to believe whatever best suits them as long as it’s not disrupting the mission
of the security team. Filling that information vacuum with facts and information
is a lot of work and it’s not possible or even appropriate to begin that work
the first time you have something important to say to an end-user.

This is the expected outcome of a dishonest approach. For many, this is how it’s
always been done, but that doesn’t make it acceptable.

We call this new approach **Honest** **Security** because we fundamentally
believe the benefits that the security team obtains from forming a working
relationship with end-users can only be realized when that relationship is
reinforced with accountability, transparency, and ethics. In other words,
honesty. Without honesty at its core, the relationship has no future and
therefore cannot have value.


## You Aren’t Dishonest. Your Tools Might Be
I want to clarify an important point, I think 99% of security practitioners in
this space are honest. However, the tools that most security practitioners use,
and the methods with which they use them can be categorized as dishonest. The
reason we made Kolide was because we believe that if tools were available which
helped improve the relationship between the security team and the end-user,
security teams would see their value immediately. So far, it seems that bet was
the right one.

With that said, if you are feeling defensive, it is important that you separate
yourself and your personal ethics from the word “dishonest”. Admitting the tools
you have been using to do your job have dishonest characteristics does not make
you irredeemably dishonest. On the other side, as an honest person, our hope is
you see the value in the techniques described in this guide and will advocate
for them in your organization.

As a passionate security enthusiast, I cannot truly express how freeing it was
to implement these techniques and to shed the hundreds of pounds of cognitive
dissonance I had built up over the years to protect my own ego. Nothing feels
better than when everything is out in the open.


## Open Source Doesn’t Mean It’s Honest

Transparency is a key part of honesty. This is the reason Kolide open-sources
all of the code that runs on the end-user’s device. It’s also why our agent uses
osquery, an open-source endpoint instrumentation framework created by the
security team at Facebook, now managed by the Linux Foundation. Everyone has the
right to know what code is running on their device, and we encourage them to
contribute and improve that software for the benefit of everyone.

With that said, open-sourcing the code is not enough. Left unchecked, even a
tool like osquery (which has contributing members who work diligently to find
the right balance between user privacy, performance, and features) can be used
for evil.

In osquery’s case, these things include:

1. Tracking someone’s precise Geolocation (See table `wifi_survey`)
2. Download/Reading the contents of any file on the computer (See table
   `carves`)
3. Viewing conversation history of Slack, iMessage, and other sensitive chat
   tools. (See table `plist`)
4. Locating files by their spotlight metadata (See table `mdfind`)

Abusing just one of these powers could be devastating, but chaining the above
capabilities together with bad-intent can have despicable results. As an
example, with access to these tools on an end-user’s device, one could instruct
osquery to download all of the photos of the person they talk with the most on
iMessage that were taken within a 300 ft radius of the location the owner of the
laptop spends most of their time. Yikes. Worse yet, using an osquery front-end,
an ill-intentioned security engineer could run that query across thousands of
devices simultaneously, sifting through the results at their leisure.

The problem is, the developers of osquery, and osquery-based solutions, can
easily rationalize why each of the features which facilitate the above scenario
exist. They aren’t doing anything wrong, but at some point there needs to be
someone along the way thinking about how these tools can be used. Right now they
assume that it’s you, the security practitioner. Yet despite granting you that
awesome responsibility, they offer little help in the form of tools or guides
that will enable you to succeed. Ultimately, without built-in accountability to
the end-users who stand to be harmed by osquery’s misuse, these features that
have independent merit can do some real harm. Honest Security practitioners
can’t fix these upstream problems, but they do have a responsibility to identify
and mitigate them. [^1]

[^1]: Since osquery only one of a few endpoint agents that actually makes _any_
consideration for the end-user's privacy, you might find this criticism unfair.
However, I know many of the people on the core team. Not only can they take the
heat, but they are incredibly responsive to feedback. I know together we can get
osquery and many other projects compatible with Honest Security.

As you can see, open-source does not inherently create things that can solely be
used for good. If we are practicing Honest Security, it is our mission to create
experiences that ensure the power afforded to us by these tools is used
responsibly, and the people who wield them are held to account.

## The Times They Are a-Changin'
This guide primarily centers its advice on the assumption that your company
issues organization-owned devices to its users. We focus on this because it's a
[steel man](https://en.wikipedia.org/wiki/Straw_man#Steelmanning) argument
against Honest Security. "Users should not expect privacy on a device they
didn't purchase", is the common retort I hear from experienced IT and security
professionals when they are faced with the ideas and recommendations found in
this guide.

However, I want to point out that end-users are often able (or sometimes even
expected) to use their personal devices to do their job. This can range from
simply connecting your work phone to company email, to using their own laptop
and connecting it to the company's MDM. This isn't a trend that is going away,
in fact, it's more popular than ever. To some, using a personal devices to do
your job is as natural as a carpenter bringing her favorite hammer to a
work-site.

When these personal devices are used, many organizations apply the same–or even
more–rigorous management controls and security capabilities.
I have even spoken to users who had their personal devices erased simply
because it was part of an IT administrator's off-boarding process.

If you fall into the camp thinking that Honest Security isn't something
you want to try; consider how you might feel if trends continue the way
they have for the last few years. We should be embracing a security strategy
that will be compatible with these trends; not invest our time, budget, and team's
resources in a strategy that is clearly in its autumn, not its spring.
