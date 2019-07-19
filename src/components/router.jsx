
<BrowserRouter  history={History}>
            <Route path="/Packages/:id" component={Package} />
            <Route path="/HomeScreenTags/:id" component={CollectionGroupDetail} />
            <Route path="/Tags" component={Tags}/>
            <Route path="/DetailedTags" component={DetailedTags} />
            <Route path="/" exact component={Container}/>
            <Route path="/Search" exact component={SearchResults}/>
          </BrowserRouter>