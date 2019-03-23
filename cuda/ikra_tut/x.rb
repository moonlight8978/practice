require "ikra"

Ikra::Configuration.auto_config = false
Ikra::Configuration.cuda_manual_nvcc = "E:/ProgramFiles/NVIDIA/Toolkit/bin"
Ikra::Configuration.cuda_manual_common_include = "E:/ProgramFiles/NVIDIA/Samples/common/inc"
Ikra::Configuration.cuda_manual_cupti_include = "E:/ProgramFiles/NVIDIA/Toolkit/extras/CUPTI/include"

test_array = Array.pnew(100) do |i|
    i + 1000
end

puts test_array[0]