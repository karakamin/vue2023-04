export default {
  props: ['pages'],
  template: `<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" :class="{ disabled: !pages.has_pre}" 
        @click.prevent="$emit('getProduct-emit',pages.current_page -1 )">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="page in pages.total_pages" :key="page" 
     :class="{ active: page === pages.current_page }"
    class="page-item">
        <a class="page-link" href="#" @click.prevent="$emit('getProduct-emit',page)">{{ page }}</a></li>
    <li class="page-item" :class="{ disabled: !pages.has_next}" 
    @click.prevent="$emit('getProduct-emit',pages.current_page +1 )">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`
}