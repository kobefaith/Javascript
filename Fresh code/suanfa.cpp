int longestCommonSubstring(string &A,string &B)
{
    int m = A.size();
    int n = B.size();
    int max = 0;
    vector<vector<int>>f(m+1,vector<int>(n+1,0));
    for(int i = 1; i<= m; i++){
        for(int j = 1; j <= n; j++){
             if(A[i-1] == B[j-1]){
                 f[i][j] = f[i-1][j-1] + 1;
                 if(max < f[i][j]){
                     max = f[i][j];
                 }
             }else{
                 f[i][j] = 0;
             }
        }
    }
    return max;
}

int longestCommonSubsequence(string A, string B){
    int m = A.size();
    int n = B.size();
    vector<vector<int>>f(m+1,vector<int>(n+1,0));
    int max = 0;
    for(int i = 1; i <= m; i++){
        for(int j = 1; j <= n; j++){
            if(A[i-1] == B[j-1]){
                f[i][j] = f[i-1][j-1] + 1;
            }else{
                f[i][j] = (f[i-1][j] > f[i][j-1])?f[i-1][j]:f[i][j-1];
            }
            if(f[i][j] > max){
                max = f[i][j];
            }
        }
    }
    return max;
    
}

ListNode *insertSortList(ListNode *head, ListNode *cur)
{
    ListNode *dummy = new ListNode(INT_MIN);
    dummy->next = head;
    ListNode *pre = dummy;
    ListNode *beh = dummy->next;
    while(beh != NULL && beh->value < cur->value){
        pre = beh;
        beh = beh->next;
    }
    if(beh != NULL){
        pre->next = cur;
        cur->next = beh;
    }else{
        pre->next = cur;
        cur->next = NULL;
    }
    return dummy->next;    
}

ListNode *reverse(ListNode *head)
{
    ListNode *pre = NULL;
    while(head != NULL){
        ListNode *temp = head->next;
        head->next = pre;
        pre = head;
        head = temp;
    }
    return pre;
}

ListNode *findmiddle(ListNode *head)
{
    if(head == NULL){
        return NULL;
    }
    ListNode *slow = head;
    ListNode *fast = head->next;
    while(fast != NULL && fast->next != NULL){
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

ListNode *merge(ListNode *left,ListNode *right)
{
    ListNode *dummy= new ListNode(-1);
    ListNode *head = dummy;
    while(left != NULL && right != NULL){
        if(left->value < right->value){
            head->next = left;            
            left = left->next;
        }else{
            head->next = right;            
            right = right->next;
        }
        head = head->next;
    }
    if(left != NULL){
        head->next = left;
    }else{
        head->next = right;
    }
    return dummy->next;
}

int bsearch(int *a,int x,int y,int t)
{
    int mid ;
    while(x<y){
        mid = x + (y - x)/2;
        if(a[mid] == t){
            return mid;
        }else if(a[mid] < t){
            x = mid+1;
        }else{
            y = mid;
        }        
    }
    return -1;    
}

BinaryTreeNode *PreorderTree(BinaryTreeNode *root)
{
    stack<BinaryTreeNode*> astack;
    BinaryTreeNode *pointer = root;
    while(!astack.empty() || pointer != NULL){
        if(pointer != NULL){
            cout<<pointer->value<<endl;
            astack.push(pointer);
            pointer = pointer->left;
        }else{
            pointer = astack.top();
            astack.pop();
            pointer = pointer->right;            
        }
    }    
}

BinaryTreeNode *InorderTree(BinaryTreeNode *root)
{
    stack<BinaryTreeNode*> astack;
    BinaryTreeNode *pointer = root;
    while(!astack.empty() || pointer != NULL){
        if(pointer != NULL){            
            astack.push(pointer);
            pointer = pointer->left;
        }else{
            pointer = astack.top();            
            pointer = pointer->right;            
        }
    }    
}

vector<vector<int>>zigzagLevelOrder(TreeNode *root)
{
    vector<vector<int>> result;
    vector<int> temp;
    queue<TreeNode*>qu;
    int size;
    if(root == NULL)
        return result;
    qu.push(root);
    while(!qu.empty()){
        size = qu.size();
        for(int i = 0; i < size; i++){
            temp.push_back(qu.front()->val);
            if(qu.front()->left != NULL)
                qu.push(qu.front()->left);
            if(qu.front()->right != NULL)
                qu.push(qu.front()->right);
            qu.pop();
        }
        result.push_back(temp);
        temp.clear();
    }
    return result;    
}

#include<iostream>
using namespace std;
int c[4];
int tot = 0;
void search(int cur)
{
    int i,j;
    if(cur == 4){
        tot++;
        for(int k = 0; k < 4; k++){
            cout<<c[k]<<' ';
        }
        cout<<endl;
    }else{
        for(i = 0; i < 4; i++ ){
            int ok = 1;
            c[cur] = i;
            for(j = 0; j < cur; j++){
                if(c[cur] == c[j] || cur-c[cur] == j-c[j] || cur+c[cur] == j+ c[j]){
                    ok = 0;
                    break;
                }
            }
            if(ok)
                search(cur+1);
        }
    }
}
#ifndef _FUNC_H_
#define _FUNC_H_
void func(int n);
void const_func(int n);
#endif

int counter()
{
    static int cnt = 0;
    ++cnt;
    return cnt;
}
int main()
{
    cout<<counter()<<endl;
    cout<<counter()<<endl;
    cout<<counter()<<endl;
    return 0;    
}
虚函数表在最前面的位置
成员变量根据其继承和声明顺序依次放在后面
在单一的继承中，被overwrite的虚函数在虚函数表中得到了更新

c++四种类型的转换
reinterpret_cast 转换一个指针为其他类型的指针
static_cast 允许执行任意的隐式转换 可以用于类和基础类型的转换
dynamic_cast 只用于对象的指针和引用。
const_cast 这个转换类型操纵传递对象的construction属性，或者是设置或者是移除

class A{
    int data;
    public:
    A(int d = 0):data(d){}
    friend A add(const A& a1,const A &a2)
    friend class B;    
}

class B{
    public:
    void twice(A& a1){
        a1.data *= 2;
    }
}

friend A & operator++(A & o)
{
    o.data += 10;
    return o;
}
friend A operator++(A & o,int)
{
    A old(o);
    o.data += 10;
    return old;
}
A & operator--()
{
    o.data -= 10;
    return *this;
}
 A operator--(int){
     A old(*this);
     data -= 10;
     return old;
 }
void qsort(int begin, int end)
{
    if (begin >= end)return;

    int left = begin;
    int right = end;
    int key = a[left];
    while (left < right)
    {
        while ((left < right) && (a[right] >= key))right--;
        a[left] = a[right];
        while ((left < right) && (a[left] <= key))left++;
        a[right] = a[left];
    }
    a[left] = key;
    qsort(begin, left-1);
    qsort(left+1, end);
}
#include<iostream>
#include<cstdlib>
using namespace std;
void merge_sort(int* a, int x, int y, int* t)
{
    if(y-x>1){
        int m = x+(y-x)/2;
        int p = x,q = m, i = x;
        merge_sort(a,x,m,t);
        merge_sort(a,m,y,t);
        while(p<m || q<y)
        {
            if(q>=y || (p<m&&a[p]<=a[q])) t[i++] = a[p++];
            else
                t[i++] = a[q++];
            
        }
        for(i = x; i < y; i++) a[i] = t[i];
    }
}

class Solution{
    public:
    vector<vector<string>> partion(string s){
        vector<vector<string>> result;
        vector<string> path;
        dfs(s,path, result, 0, 1);
        return result;
    }
}

dir = argv[1];
DIR* p=opendir(dir);
dirent* pd = NULL;
while((pd = readdir(p))!= NULL){
    string path = dir;
    path += "/";
    path += pd->d_name;
    ifstream fin(path.c_str());
}

#include<iostream>
#include<sys.stat.h>
#include<unistd.h>
#include<string>
using namespace std;

int main()
{
    string cmd;
    string dirname;
    for(;;){
        cout<<"cmd:";
        cin>>cmd;
        if(cmd == "mkdir"){
            cin>>dirname;
            mkdir(dirname.c_str(),0777);
        }else if(cmd == "rmdir"){
            cin>>dirname;
            rmdir(dirname.c_str());
        }else if(cmd =="chdir"){
            cin>>dirname;
            chdir(dirname.c_str());
        }
    }
}

#include<stdio.h>
#include<sys.types.h>
#include<unistd.h>

int main(void)
{
    int i;
    for(i = 0; i < 2; i++){
        fork();
        printf("_");        
    }
    return 0;
}

#include<iostream>
using namespace std;
#include<signal.h>
#include<unistd.h>
#include<sys/wait.h>
#include<sys/types.h>
#include<stdlib.h>
<<<<<<< HEAD
=======

void func(int sig)
{
    signal(sig,func);
    wait(NULL);
    cout<<"wait on child"<<endl;
}

void child(int len, char ch)
{
    if(fork() != 0)
        return ;
    for(int i = 0; i < len; i++){
        cerr<<ch;
        sleep(3);
    }
    exit(0);
}
 int main()
 {
     signal(SIGCHLD,func);
     child(10,'.');
     child(20,'^');
     for(int i = 0; i < 100; i++){
         cerr<<'$';
         sleep(1);
     }
 }


void func(int sig)
{
    signal(sig,func);
    wait(NULL);
    cout<<"wait on child"<<endl;
}

void child(int len, char ch)
{
    if(fork() != 0)
        return ;
    for(int i = 0; i < len; i++){
        cerr<<ch;
        sleep(3);
    }
    exit(0);
}
 int main()
 {
     signal(SIGCHLD,func);
     child(10,'.');
     child(20,'^');
     for(int i = 0; i < 100; i++){
         cerr<<'$';
         sleep(1);
     }
 }

#include<iostream>
using namespace std;
#include<sys/ipc.h>
#include<sys/msg.h>
#include<stdlib.h>

int main(int argc, char* argv[])
{
    if(argc == 1){
        cout<<*argv<<"key"<<endl;
        return 0;
    }
    int key = atoi(argv[1]);
    int qid;
    qid = msgget(key,IPC_CREAT|0600);
    if(qid<0){
        cout<<"cannot creat"<<endl;
        return -1;
    }
    cout<<"OK!"<<endl;
    cout<<"key = 0X"<<hex<<key<<endl;
    cout<<"qid="<<dec<<qid<<endl;
}

#include<stdio.h>
#include<string.h>
int main()
{
    char word[100];
    scanf("%s",word);
    int len = strlen(word);
    for(int i = 1; i < len; i++){
        if(len%i == 0){
            int ok = 1;
            for(int j = i;j < len; j++)
                if(word[j]!= word[j%i]){
                    ok = 0;break;
                } 
        }
        if(ok){
            printf("%d\n",i);break;
        }
    }
    return 0;
}

#include<iostream>
#include<string>

using namespace std;

void sort(string &str)
{
    int len = str.size();
    int i = 0, j = 0, k = 0;
    char temp;
    for(i = 0; i < len-1; i++){
        k =i ;
        for(j = i+1; j < len; j++)
            if(str[j] <= str[k])
                k = j;
        temp = str[k];
        str[k] = str[i];
        str[i] = temp;        
    }
}

int *Next(string p)
{
    int m = p.size;
    assert(m>0);
    int * N = new int [m];
    assert(N!=0);
    N[0] = 0;
    for(int i = 0; i < m; i++)
    {
        int k = N[i-1];
        while(k>0&&p.str[i] != p.str[k])
            k = N[k-1];
        if(p.str[i] == p.str[k])
            N[i] = k+1;
        else
            N[i] = 0;
    }
    return N;    
}

int kmp_find(string s, string p, int *N, int startindex)
{
    int lastindex = s.size-p.size;
    if((lastindex-startindex)<0)
        return (-1);
    int i;
    int j = 0;
    for(i = startindex; i < s.size; i++){
        while(p.str[j] != s.str[i] && j > 0)
            j = N[j-1];
        if(p.str[j] == s.str[i]) j++;
        if(j == p.size)
            return (i-j+1);
    }
    return (-1);   
}



gcc -s test1.c
gcc -c test2.c

ar cr libtest.a test1.o test2.o 
int *Next(string p)
{
    int m = p.size;
    assert(m>0);
    int * N = new int [m];
    assert(N!=0);
    N[0] = 0;
    for(int i = 0; i < m; i++)
    {
        int k = N[i-1];
        while(k>0&&p.str[i] != p.str[k])
            k = N[k-1];
        if(p.str[i] == p.str[k])
            N[i] = k+1;
        else
            N[i] = 0;
    }
    return N;    
}

int kmp_find(string s, string p, int *N, int startindex)
{
    int lastindex = s.size-p.size;
    if((lastindex-startindex)<0)
        return (-1);
    int i;
    int j = 0;
    for(i = startindex; i < s.size; i++){
        while(p.str[j] != s.str[i] && j > 0)
            j = N[j-1];
        if(p.str[j] == s.str[i]) j++;
        if(j == p.size)
            return (i-j+1);
    }
    return (-1);   
}

int ELFhash(char *key)
{
    unsigned long h = 0;
    while(*key){
        h = (h<<4)+*key++;
        unsigned long g = h&0xF0000000;
        if(g) h^=g>>24;
        h &= ~g;
    }
    return h%hash_table_size;  
}

<script>
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth()+1;
var date = d.getDate();
var hour = d.getHours();
var minutes = d.getMinutes();
var second = d.getSeconds();

</script>

function hasPlugin(name){
    name = name.toLowerCase();
    for(var i = 0; i < navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
            return true;
        }
    }
    return false;
}






































