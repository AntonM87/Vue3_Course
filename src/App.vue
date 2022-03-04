<template>
  <div class="app">
    <h1>Страница с записями</h1>
    <MyInput
        placeholder="Как искать ?"
        v-model="searchQuery">
      <SelectList
          :title="'Как искать?'"
          :options="sortOptions"
          v-model="selectedSearch"/>
    </MyInput>
    <div class="app_btns">
      <MyButton @click="showDialog">Создать запись</MyButton>
      <SelectList
          :title="'Как сортировать?'"
          :options="sortOptions"
          v-model="selectedSort"/>
    </div>
    <DialogWindow v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </DialogWindow>

    <MyPagination
        @selectPage="changeCurrentPage"
        :page="page"
        :totalPages="totalPages"/>

    <div class="page-wrapper">
      <div
          @change-page="changeCurrentPage(pageNumber)"
          class="page"
          :class="{'current-page':  page === pageNumber}"
          :key="pageNumber"
          v-for="pageNumber in totalPages">
        {{ pageNumber }}
      </div>
    </div>

    <PostList
        @remove="removePost"
        :posts="sortedAndSearchedPosts"
        v-if="!isPostLoadingIndicator"/>
    <LoadingInidcator v-else/>
    <h2 v-if="posts.length === 0" style="color: red">Список пока пуст</h2>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogWindow from "@/components/UI/DialogWindow";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import LoadingInidcator from "@/components/UI/LoadingInidcator";
import SelectList from "@/components/UI/SelectList";
import MyInput from "@/components/UI/MyInput";
import MyPagination from "@/components/UI/MyPagination";

export default {
  components: {MyPagination, MyInput, SelectList, LoadingInidcator, MyButton, DialogWindow, PostList, PostForm},
  data() {
    return {
      posts: [],
      title: '',
      body: '',
      dialogVisible: false,
      isPostLoadingIndicator: false,
      selectedSort: 'body',
      selectedSearch: '',
      searchQuery: '',
      page: 1,
      limit: 5,
      totalPages: '',
      sortOptions: [
        {value: 'title', name: 'По по загловку'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => post.id !== p.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoadingIndicator = true;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=${this.limit}`);
        this.totalPages = Math.ceil(100 / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isPostLoadingIndicator = false;
      }
    },
    changeCurrentPage() {
      this.fetchPosts();
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts(){
      console.log('выбрана сортировка',this.selectedSort);
      return this.sortedPosts.filter((post)=> post[this.selectedSort].includes(this.searchQuery));
    }
  },
  watch: {
    // posts:{
    //   handled(newValue){
    //     console.log(newValue);
    //   },
    //   deep: true
    // },
    // selectedSort(value){
    //   this.posts.sort((post1, post2) => post1[value].localeCompare(post2[value]));
    // }

    // selectedSort(value) {
    //   this.posts.sort((post1, post2) => {
    //     {
    //       return post1[this.selectedSort].localeCompare(post2[this.selectedSort]);
    //     }
    //   })
    //   console.log(value)
    // },
    // sortedAndSearchedPosts() {
    //   return this.post.filter(post => post.title.includes(this.selectedSort));
    // },
    // page(){
    //   this.fetchPosts();
    // }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  margin-bottom: 1rem;
}

.app {
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 2rem;
}

.app_btns {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.page {
  margin: 0.15rem 0.25rem;
  padding: 0.15rem 0.25rem;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background: #e7e7e7;
  }
}

.current-page {
  border: 2px solid teal;

}
</style>