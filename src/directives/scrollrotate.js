const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('rotate');
                animatedScrollObserver.unobserve(entry.target)
            }
        });
    }
);

export default{
    bind(el) {
        el.classList.add('before-rotate');
        animatedScrollObserver.observe(el);
    }
}