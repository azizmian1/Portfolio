//----Nav----
const Home = document.getElementById("home");
const About = document.getElementById("about");
const Skills = document.getElementById("skills");
const Projects = document.getElementById("projects");
const Git = document.getElementById("git");
const Linkdin = document.getElementById("lnkdin");
//----Home----
Home.innerHTML = `<svg class="Page focus" id="home"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H10V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V10M3 12L12 3L21 12"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
//----About----
About.innerHTML = `<svg class="Page focus" id="about-me"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 21C13.7608 21.0019 15.483 20.4843 16.951 19.512C16.835 18.5451 16.3691 17.6541 15.6412 17.0071C14.9133 16.3601 13.9739 16.0019 13 16H11C10.0261 16.0019 9.08665 16.3601 8.35879 17.0071C7.63092 17.6541 7.16502 18.5451 7.049 19.512C8.51698 20.4843 10.2392 21.0019 12 21ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
//----Skills----
Skills.innerHTML = `<svg class="Page focus" id="skill"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.338 14.276C12.2294 14.276 12.952 13.5534 12.952 12.662C12.952 11.7706 12.2294 11.048 11.338 11.048C10.4466 11.048 9.724 11.7706 9.724 12.662C9.724 13.5534 10.4466 14.276 11.338 14.276Z" />
<path d="M4.111 19.889L10.197 13.803M12.86 6.57504L17.425 11.14L15.142 17.226L4.461 21L3 19.539L6.774 8.85804L12.86 6.57504ZM18.0646 11.7785L12.2218 5.93566L15.1577 2.99976L21.0005 8.84258L18.0646 11.7785ZM12.952 12.662C12.952 13.5534 12.2294 14.276 11.338 14.276C10.4466 14.276 9.724 13.5534 9.724 12.662C9.724 11.7706 10.4466 11.048 11.338 11.048C12.2294 11.048 12.952 11.7706 12.952 12.662Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
//----Projects----
Projects.innerHTML = `<svg class="Page focus" id="projects"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8L11 12L7 16M12 16H17M4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
//----Github----
Git.innerHTML = `<svg class="lnk" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 2.333C9.64482 2.33045 7.36563 3.16677 5.57097 4.69206C3.77631 6.21735 2.5835 8.33191 2.20631 10.6568C1.82912 12.9817 2.29221 15.3649 3.51258 17.3793C4.73295 19.3938 6.63083 20.9078 8.8661 21.65C9.3661 21.742 9.5441 21.435 9.5441 21.173C9.5441 20.936 9.5341 20.156 9.5301 19.328C6.7731 19.928 6.1921 18.159 6.1921 18.159C6.01013 17.5597 5.62002 17.0451 5.0921 16.708C4.1921 16.093 5.1611 16.108 5.1611 16.108C5.47531 16.1513 5.77549 16.2658 6.03874 16.4427C6.30199 16.6197 6.52135 16.8544 6.6801 17.129C6.81438 17.3734 6.99578 17.5888 7.21383 17.7627C7.43187 17.9366 7.68223 18.0656 7.95042 18.1421C8.21861 18.2186 8.49931 18.2412 8.77629 18.2086C9.05327 18.176 9.32103 18.0888 9.5641 17.952C9.60831 17.4493 9.83151 16.9791 10.1931 16.627C7.9931 16.377 5.6781 15.527 5.6781 11.727C5.66442 10.7423 6.0304 9.79007 6.7001 9.068C6.39653 8.21348 6.43051 7.27532 6.7951 6.445C6.7951 6.445 7.6271 6.179 9.5211 7.461C11.1453 7.01701 12.8589 7.01701 14.4831 7.461C16.3731 6.179 17.2001 6.445 17.2001 6.445C17.5662 7.2747 17.602 8.21283 17.3001 9.068C17.9695 9.79011 18.3348 10.7425 18.3201 11.727C18.3201 15.534 16.0011 16.371 13.7951 16.616C14.0313 16.8562 14.2135 17.1441 14.3295 17.4604C14.4456 17.7766 14.4928 18.114 14.4681 18.45C14.4681 19.776 14.4561 20.844 14.4561 21.17C14.4561 21.433 14.6351 21.742 15.1371 21.645C17.3689 20.9 19.2628 19.3852 20.4802 17.3717C21.6975 15.3582 22.1588 12.9773 21.7815 10.6549C21.4043 8.33247 20.2131 6.22 18.421 4.69534C16.629 3.17069 14.353 2.33331 12.0001 2.333Z" />
</svg>`;
//----Linkdin----
Linkdin.innerHTML = `<svg class="lnk" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.979 9V10.586C13.3122 10.079 13.7715 9.66737 14.3119 9.39143C14.8522 9.11549 15.4549 8.98474 16.061 9.012C19.3 9.012 20 11.03 20 13.655V19H17V14.262C17 13.132 16.771 11.678 15.005 11.678C13.292 11.678 13 12.908 13 14.178V19H10.009V9H12.979Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.487C8 6.78367 7.91203 7.07368 7.74721 7.32035C7.58238 7.56703 7.34811 7.75929 7.07403 7.87282C6.79994 7.98635 6.49834 8.01606 6.20737 7.95818C5.91639 7.9003 5.64912 7.75744 5.43934 7.54766C5.22956 7.33788 5.0867 7.07061 5.02882 6.77963C4.97094 6.48866 5.00065 6.18706 5.11418 5.91297C5.22771 5.63889 5.41997 5.40462 5.66665 5.2398C5.91332 5.07497 6.20333 4.987 6.5 4.987C6.89783 4.987 7.27936 5.14503 7.56066 5.42634C7.84197 5.70764 8 6.08917 8 6.487Z" />
<path d="M8 9.012H5V19H8V9.012Z" />
</svg>`;
//----------------
const close = document.getElementById("close");
close.innerHTML=`<svg class="close" xmlns = "http:www.w3.org/2000/svg" viewBox = "0 0 24 24" stroke-width = "2" stroke = "currentColor" fill="none"stroke-linecap="round"stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M18 6l-12 12"></path>
<path d="M6 6l12 12"></path>
</svg>`;
// Define SVG icons
const icons = {
    html: `
      <svg class="libs" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.90601 2L4.50001 19.683L12 21.842L19.544 19.684L21.092 2H2.90601ZM17.1 8H9.04401L9.21801 10H16.994L16.362 16.513L12.072 17.884L7.74601 16.44L7.45601 13.531H9.50001L9.66301 14.931L12.087 15.74L14.457 14.983L14.757 12.001H7.36801L6.80001 6H17.319L17.1 8Z" />
      </svg>`,
    java: `
      <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Type=Default" clip-path="url(#clip0_335_250)">
          <g id="Group">
            <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M0 0H512V512H0V0Z" fill="#F7DF1E"/>
            <path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M134.624 427.865L173.806 404.153C181.365 417.555 188.241 428.894 204.735 428.894C220.545 428.894 230.513 422.71 230.513 398.654V235.058H278.628V399.334C278.628 449.169 249.416 471.852 206.797 471.852C168.307 471.852 145.964 451.917 134.623 427.861" fill="black"/>
            <path id="Shape_3" fill-rule="evenodd" clip-rule="evenodd" d="M304.762 422.709L343.939 400.026C354.252 416.868 367.656 429.24 391.369 429.24C411.305 429.24 424.018 419.272 424.018 405.524C424.018 389.027 410.959 383.184 388.962 373.564L376.937 368.405C342.222 353.63 319.194 335.071 319.194 295.89C319.194 259.803 346.689 232.307 389.651 232.307C420.24 232.307 442.235 242.962 458.043 270.801L420.581 294.858C412.332 280.08 403.399 274.239 389.652 274.239C375.561 274.239 366.624 283.174 366.624 294.858C366.624 309.293 375.561 315.137 396.18 324.073L408.208 329.228C449.107 346.757 472.135 364.627 472.135 404.837C472.135 448.144 438.11 471.856 392.401 471.856C347.722 471.856 318.851 450.549 304.763 422.709" fill="black"/>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_335_250">
            <rect width="512" height="512" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
    css: `
      <svg class="libs" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.90601 2L4.50001 19.781L12 21.941L19.544 19.782L21.091 2H2.90601ZM16.343 16.679L12.006 17.879H11.997L7.65601 16.679L7.35601 13.521H9.48601L9.63701 15.042L11.997 15.679L14.36 15.041L14.608 12H7.26401L7.07401 10H14.792L14.969 8H6.87001L6.69301 6H17.307L16.343 16.679Z" />
      </svg>`,
    php: `
    <svg  width="25" height="25" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Type=Flat">
    <g id="Union">
    <path class="libs" d="M376.117 218.141C387.055 218.141 394.281 220.094 397.992 224.195C401.703 228.297 402.484 235.133 400.531 244.898C398.578 255.055 394.672 262.477 389.008 266.773C383.344 271.07 374.75 273.219 363.227 273.219H345.844L356.586 218.141H376.117Z" />
    <path class="libs" d="M152.094 218.141C163.031 218.141 170.258 220.094 173.969 224.195C177.68 228.297 178.461 235.133 176.508 244.898C174.555 255.055 170.648 262.477 164.984 266.773C159.32 271.07 150.727 273.219 139.203 273.219H121.82L132.562 218.141H152.094Z" fill="#9B9B9B"/>
    <path class="libs" fill-rule="evenodd" clip-rule="evenodd" d="M256 377.125C388.678 377.125 496.234 322.647 496.234 255.445C496.234 188.243 388.678 133.766 256 133.766C123.322 133.766 15.7656 188.243 15.7656 255.445C15.7656 322.647 123.322 377.125 256 377.125ZM334.906 329.078H306.195L331.781 197.242H387.055C403.656 197.242 415.766 201.539 423.383 210.328C431 219.117 433.344 231.227 430.219 246.852C429.047 253.297 426.898 259.156 423.969 264.43C421.039 269.703 417.133 274.586 412.25 279.078C406.391 284.547 400.141 288.258 393.109 290.602C386.078 292.945 377.289 294.117 366.352 294.117H341.742L334.906 329.078ZM227.289 162.281H255.805L248.969 197.242H274.359C290.375 197.242 301.312 199.977 307.367 205.641C313.422 211.305 315.18 220.289 312.836 232.789L300.922 294.117H272.016L283.344 235.719C284.711 229.078 284.125 224.586 281.977 222.242C279.828 219.898 274.945 218.531 267.719 218.531H244.867L230.219 294.117H201.703L227.289 162.281ZM110.883 329.078H82.1719L107.758 197.242H163.031C179.633 197.242 191.742 201.539 199.359 210.328C206.977 219.117 209.32 231.227 206.195 246.852C205.023 253.297 202.875 259.156 199.945 264.43C197.016 269.703 193.109 274.586 188.227 279.078C182.367 284.547 176.117 288.258 169.086 290.602C162.055 292.945 153.266 294.117 142.328 294.117H117.719L110.883 329.078Z" />
    <path class="libs" fill-rule="evenodd" clip-rule="evenodd" d="M506 255.445C506 328.041 394.071 386.891 256 386.891C117.929 386.891 6 328.041 6 255.445C6 182.85 117.929 124 256 124C394.071 124 506 182.85 506 255.445ZM502 255.445C502 289.517 475.66 321.325 430.915 344.851C386.356 368.279 324.52 382.891 256 382.891C187.48 382.891 125.644 368.279 81.0848 344.851C36.3396 321.325 10 289.517 10 255.445C10 221.374 36.3396 189.566 81.0848 166.04C125.644 142.611 187.48 128 256 128C324.52 128 386.356 142.611 430.915 166.04C475.66 189.566 502 221.374 502 255.445Z"/>
    </g>
    </g>
    </svg>`
  };
  
  // Apply icons to elements based on class
  document.querySelectorAll('.info i').forEach(icon => {
    const iconClass = icon.className.split('-')[1];
    icon.innerHTML = icons[iconClass] || '';
  });
  

// //---Arrows----
// const left = document.getElementById("left");
// const right = document.getElementById("right");

// left.innerHTML = `<svg class="arrow left" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M15.0001 6.65356L9.30005 11.7011C9.20588 11.7818 9.13062 11.8804 9.0791 11.9904C9.02759 12.1004 9.00098 12.2195 9.00098 12.3398C9.00098 12.4602 9.02759 12.5792 9.0791 12.6892C9.13062 12.7993 9.20588 12.8978 9.30005 12.9786L15.0001 18.0261"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`;
// right.innerHTML = `<svg class="arrow right" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M9 18.0261L14.7 12.9786C14.7942 12.8978 14.8694 12.7993 14.921 12.6892C14.9725 12.5792 14.9991 12.4602 14.9991 12.3398C14.9991 12.2195 14.9725 12.1004 14.921 11.9904C14.8694 11.8804 14.7942 11.7818 14.7 11.7011L9 6.65356"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`;

//---Project Slider----
// const slide = document.querySelector(".Slider");
// const arrows = document.querySelectorAll(".container i");
// const card = document.querySelector(".container").offsetWidth;

//----functions----
function copy()
    {
	    let text = document.getElementById("Email").innerHTML;
		navigator.clipboard.writeText(text);
	}
	
const notification = document.querySelector('.alert');
const button = document.querySelector('.btn');
const Alert = () =>
	{
		notification.classList.remove('none');
        notification.classList.toggle('hide');
        let text = document.getElementById("Email").innerHTML;
		navigator.clipboard.writeText(text);
	}
	document.addEventListener("click",(event) =>
    {
        const clickNotification = notification.contains(event.target);
        const btnClicked = button.contains(event.target);

        if(!clickNotification && !btnClicked)
        {
            notification.classList.add('hide');
        }
    });
// arrows.forEach(btn=>
//     {
//         btn.addEventListener("click",()=>
//         {
//             slide.scrollLeft += btn.id === "left"? -card:card;
//         })
//     })
    //----Slides----
//     var swipe = new Swiper(".container",
//     {
//         slidesPerView: 3,
// spaceBetween: 25,
// loop: true,
// centerSlide: 'true',
// fade: 'true',
// grabCursor: 'true',
// pagination: {
//   el: ".paginate",
//   clickable: true,
//   dynamicBullets: true,
// },
// navigation: {
//   nextEl: ".btn-next",
//   prevEl: ".btn-prev",
// },

// breakpoints:{
//     0: {
//         slidesPerView: 1,
//     },
//     520: {
//         slidesPerView: 2,
//     },
//     950: {
//         slidesPerView: 3,
//     },
// },
//     });
    //----Themes----
    const themes = ['light','sunset','sunrise','dark'];
    let count = 0;
    const thPicker = document.getElementById("th-Pick");
    const thList = document.getElementById("th-Grid");

    const changeTheme = (theme) =>
    {
        if(count < 3)
        {
            count++;
        }
        else
        {
            count = 0;
        }

        document.documentElement.style.setProperty('--bg',`var(--${theme}-bg`);
        document.documentElement.style.setProperty('--border',`var(--${theme}-border`);
        document.documentElement.style.setProperty('--surface',`var(--${theme}-surface`);
        document.documentElement.style.setProperty('--text-primary',`var(--${theme}-text-primary`);
        document.documentElement.style.setProperty('--text-secondary',`var(--${theme}-text-secondary`);
        document.documentElement.style.setProperty('--primary',`var(--${theme}-primary`);
        document.documentElement.style.setProperty('--text-inverse',`var(--${theme}-text-inverse`);
        
        const thGrid = thPicker.querySelector(".c-theme-grid");

        switch(theme)
        {
            case theme = 'light':
			    thGrid.style.top = '0.025rem'
			    break;
		    case theme = 'sunset':
		    	thGrid.style.top = '-1.625rem'
			    break;
		    case theme = 'sunrise':
			    thGrid.style.top = '-3.255rem'
			    break;		    
            case theme = 'dark':
			    thGrid.style.top = '-4.9rem'
			    break;
        }
    }

//----Theme Icons----
const dark = `<svg class="th-Icon" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Dark"><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg>`;
const sunset = `<svg class="th-Icon" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Sunset"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>`;
const sunrise = `<svg class="th-Icon" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Sunrise"><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>`;
const light = `<svg class="th-Icon" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabindex="-1" title="Light"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>`;

thPicker.innerHTML = `<div class="c-theme-grid"> ${light} ${sunset} ${sunrise} ${dark} </div>`;

thPicker.onclick = () =>
{
    changeTheme(themes[count])
};

changeTheme(themes[0]);