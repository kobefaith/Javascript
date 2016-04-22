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





















