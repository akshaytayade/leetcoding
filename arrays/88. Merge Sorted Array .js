var merge = function(nums1, m, nums2, n) {
    let first = m - 1
    let second = n - 1
    let maxlen = nums1.length - 1
    
    while (second >= 0){
        if (nums1[first] >= nums2[second]){
            nums1[maxlen] = nums1[first]
            first--
            maxlen--
        }
        else{
            nums1[maxlen] = nums2[second]
            second--
            maxlen--
        }
    }
    console.log(nums1)
};

/* 
had problems with this testcase for a while
 -- merge([0],0,[1],1) 
*/