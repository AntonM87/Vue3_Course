<template>
  <div class="app">
    <h1>{{ $store.state.isAuth ? 'Добро пожаловать' : 'Необходимо авторизоватся' }}</h1>
    <h1>Лайки в сторе $store.state.likes {{ $store.state.likes }}</h1>
    <h1>Вызов $store.getters.doubleLikes {{ $store.getters.doubleLikes }}</h1>
    <MyButton @click="$store.commit('incrementLikes')">Добавить</MyButton>
    <MyButton @click="$store.commit('decrementLikes')">Убавить</MyButton>
    <MyInput
        v-model="searchQuery">
      <!--      <SelectList-->
      <!--          :title="'Как искать?'"-->
      <!--          :options="sortOptions"-->
      <!--          v-model="selectedSearch"/>-->
    </MyInput>
    <div class="app_btns">
      <MyButton @click="showDialog">Создать запись</MyButton>
      <SelectList
          :title="'Как сортировать?'"
          :options="sortOptions"
          v-model="selectedSort"/>
    </div>
    <DialogWindow
        v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </DialogWindow>

    <!--    <MyPagination-->
    <!--        @selectPage="changeCurrentPage"-->
    <!--        :page="page"-->
    <!--        :totalPages="totalPages"/>-->

    <!--    <div class="page-wrapper">-->
    <!--      <div-->
    <!--          @click="changeCurrentPage(pageNumber)"-->
    <!--          class="page"-->
    <!--          :class="{'current-page':  page === pageNumber}"-->
    <!--          :key="pageNumber"-->
    <!--          v-for="pageNumber in totalPages">-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->

    <PostList
        @remove="removePost"
        :posts="sortedAndSearchedPosts"
        v-if="!isPostLoadingIndicator"/>
    <LoadingInidcator v-else/>
    <h2 v-if="posts.length === 0" style="color: red">Список пока пуст</h2>
  </div>
  <div v-intersection="{loadMorePosts, page}" ref="observer" class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogWindow from "@/components/UI/DialogWindow";
import MyButton from "@/components/UI/MyButton";
import LoadingInidcator from "@/components/UI/LoadingIndicator";
import SelectList from "@/components/UI/SelectList";
import MyInput from "@/components/UI/MyInput";
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
  name: 'PostPage',
  components: {MyInput, SelectList, LoadingInidcator, MyButton, DialogWindow, PostList, PostForm},
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'postModule/setPage',
    }),
    ...mapActions({
      loadMorePosts: 'postModule/loadMorePosts',
      fetchPosts: 'postModule/fetchPosts',
    }),
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
    // changeCurrentPage(pageNumber) {
    //   this.page = pageNumber;
    // }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.postModule.posts,
      title: state => state.postModule.title,
      body: state => state.postModule.body,
      isPostLoadingIndicator: state => state.postModule.isPostLoadingIndicator,
      selectedSort: state => state.postModule.selectedSort,
      selectedSearch: state => state.postModule.selectedSearch,
      searchQuery: state => state.postModule.searchQuery,
      page: state => state.postModule.page,
      limit: state => state.postModule.limit,
      totalPages: state => state.postModule.totalPages,
      sortOptions: state => state.postModule.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'postModule/sortedPosts',
      sortedAndSearchedPosts: 'postModule/sortedAndSearchedPosts',
    }),
  },
  watch: {
    // page(){
    //   this.fetchPosts();
    // }
  }
}
</script>

<style lang="scss">
h1 {
  margin-bottom: 1rem;
}

.app_btns {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.observer {
  width: 100%;
  height: 10px;
  background: teal;
}
</style>