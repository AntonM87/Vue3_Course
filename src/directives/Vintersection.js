export default {
    mounted(el, binding) {
            // console.log(el, binding)

        const options = {
          root: document.querySelector('#scrollArea'),
          rootMargin: '0px',
          threshold: 1.0
        }
        const callback = (entries) => {
          if (entries[0].isIntersecting && binding.value.page <= 10) {
            binding.value.loadMorePosts();
          }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    }
}