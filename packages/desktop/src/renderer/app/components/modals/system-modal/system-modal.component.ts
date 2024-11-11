import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CLOUD_SYSTEM } from 'src/renderer/app/constants/system.constants';
import { ToastsService } from 'src/renderer/app/services/toasts.service';
import { UIService } from 'src/renderer/app/services/ui.service';
@Component({
  selector: 'app-system-modal',
  templateUrl: './system-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemModalComponent implements OnInit {
  protected cloudForm: FormGroup;

  // 假设这是你获取的初始数据
  private initialData = {
    cloudWebProtocol: 'https', // 选中的 HTTP/HTTPS
    cloudWebSocketProtocol: 'wss', // 选中的 WS/WSS
    cloudHost: 'example.com', // 主机
    cloudPort: '8080' // 端口
  };

  constructor(
    private fb: FormBuilder,
    private uiService: UIService,
    private toastService: ToastsService
  ) {
    // 初始化表单
    this.cloudForm = this.fb.group({
      cloudWebProtocol: [
        this.initialData.cloudWebProtocol,
        Validators.required
      ],
      cloudWebSocketProtocol: [
        this.initialData.cloudWebSocketProtocol,
        Validators.required
      ],
      cloudHost: [
        this.initialData.cloudHost,
        [
          Validators.required,
          Validators.pattern(
            /^(?:(?:(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))$/
          )
        ]
      ],
      cloudPort: [
        this.initialData.cloudPort,
        [Validators.required, Validators.pattern(/^[0-9]{1,5}$/)]
      ]
    });
  }

  ngOnInit(): void {
    // 在组件初始化时，你可以通过云服务器的API获取数据并填充表单
    // 比如，你可以调用服务获取初始数据然后使用 `this.cloudForm.setValue()` 或 `this.cloudForm.patchValue()`

    let data = this.initialData;
    try {
      const conf = localStorage.getItem(CLOUD_SYSTEM);
      if (conf) {
        data = JSON.parse(conf);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {}

    this.cloudForm.setValue(data);
  }

  // 提交表单
  public onSubmit() {
    if (this.cloudForm.valid) {
      // 表单数据提交逻辑
      localStorage.setItem(CLOUD_SYSTEM, JSON.stringify(this.cloudForm.value));
      this.uiService.closeModal('systemSetting');
      // 在这里你可以执行提交请求的操作，比如通过 HTTP 服务提交到服务器
    } else {
      // 如果表单无效，可以进行错误处理
      this.toastService.addToast(
        'error',
        'The Host or Port format is incorrect.'
      );
    }
  }

  // 关闭 modal
  public close(isSaved: boolean) {
    if (isSaved) {
      // 保存操作逻辑
      this.onSubmit();
    } else {
      // 取消操作，重置表单或关闭 modal
      this.uiService.closeModal('systemSetting');
    }
  }
}
