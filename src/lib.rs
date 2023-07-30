use std::{os::raw::{c_void, c_int}, slice::from_raw_parts_mut};

#[no_mangle]
pub extern "C" fn quicksort(data: *mut c_void, len: c_int) {
    let len = len as usize;
    let data = data as *mut i32;
    let data_slice = unsafe { from_raw_parts_mut(data, len) };
    _quicksort(data_slice, 0, len as isize - 1);
}

fn _quicksort(arr: &mut [i32], low: isize, high: isize) {
    if low < high {
        let p = partition(arr, low, high);
        _quicksort(arr, low, p - 1);
        _quicksort(arr, p + 1, high);
    }
}

fn partition(arr: &mut [i32], low: isize, high: isize) -> isize {
    let pivot = high as usize;
    let mut i = low - 1;
    let mut j = high;

    loop {
        i += 1;
        while arr[i as usize] < arr[pivot] {
            i += 1;
        }
        j -= 1;
        while j >= 0 && arr[j as usize] > arr[pivot] {
            j -= 1;
        }
        if i >= j {
            break;
        } else {
            arr.swap(i as usize, j as usize);
        }
    }
    arr.swap(i as usize, pivot as usize);
    return i;
}
