export const articles = [
  {
    id: '1',
    title: 'New to the web platform in December',
    excerpt:
      'Discover some of the interesting features that have landed in stable...',
    body: 'In December 2023 Firefox 121, Chrome 120, and Safari 17.2 became stable. This post looks at what that means for the web platform. Relaxed parsing for CSS Nesting Chrome 120 and Safari 17.2 include relaxed parsing for CSS Nesting. As this has been supported in Firefox from version 117, this means that all major engines support this syntax change. The CloseWatcher API. Chrome 120 includes the CloseWatcher API, a new API for listening for and responding to close requests. These requests are triggered by the ESC key on desktop and the back gesture or button on Android, and can be tricky to implement well.',
  },
  {
    id: '2',
    title: 'Compression Streams are now supported on all browsers',
    excerpt:
      'The Compression Streams API is for compressing and decompressing...',
    body: 'The Compression Streams API is for compressing and decompressing streams of data using the gzip or deflate (or deflate-raw) formats. Using the built-in compression of the Compression Streams API, JavaScript applications do not need to include a compression library, making the download size of the application smaller. This useful API is now supported across all browsers.',
  },
  {
    id: '3',
    title: 'Introducing Learn Performance',
    excerpt:
      'Today we are launching the initial version of Learn Performance, the latest entry in the Learn series...',
    body: 'Today we are launching the initial version of Learn Performance, the latest entry in the Learn series on web.dev! As web performance is a vital part of the user experience, it was only a matter of time an official course on the topic was released! Learn Performance is intended for an audience that cares about web performance, but may be just beginning to get familiar with it. This course starts from that assumption, but wastes little time in getting you into the technical details of what it means to make web pages as fast as they can possibly be for your users. It was written chiefly by Kevin Farrugia, with a couple of modules written by Jeremy Wagner, and reviewed by Rachel Andrew and Barry Pollard. While you may read this course in any order you like, beginners are better off working their way from the beginning to the end. Those with more experience in web performance may be able to pick and choose which modules they want to read, in whichever order you prefer. What matters most is that you gain knowledge that you can use to make your corner of the web faster for all who visit it.',
  },
  {
    id: '4',
    title: 'Changes to the web.dev infrastructure',
    excerpt:
      'I have taken the decision to move from a GitHub hosted version of the CMS to infrastructure...',
    body: 'I have taken the decision to move from a GitHub hosted version of the CMS to infrastructure that is shared across a number of different teams in Google. This will have an impact on how people contribute to the site, which I would like to explain a little more.',
  },
  {
    id: '5',
    title: 'New CSS color spaces and functions in all major engines',
    excerpt:
      'All major engines now support the new CSS color spaces and functions. Find out how...',
    body: 'All major engines now support the new CSS color spaces and functions. Find out how they can bring vibrancy to your designs. CSS now supports color spaces that allow us to access colors outside of the sRGB gamut. This means that you can support HD (high definition) displays, using colors from HD gamuts. This support comes with new functions to make better use of color on the web. We already have a number of functions that allow us to access colors within the sRGB gamut—rgb(), hsl(), and hwb(). Now supported in browsers is the color() function, a normalized way to access colors within any RGB color space. This includes sRGB, Display P3, and Rec2020. You can see some examples in the following CSS:',
  },
];
